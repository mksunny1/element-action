/**
 * Here we export a component action which can be used with @module:actribute or 
 * @module:appliance to create class actions for many DOM operations like 
 * attribute change, property change, re-rendering and array-binding.
 */

import { ActionObject } from "action-object";
import { ClassAction } from "class-action";
import { IComponentActionContext } from "./component-action.js";

/**
 * An object used for setting up reactivity in DOM trees.
 * It is first initialized with a top-level ActionObject (root). Then to 
 * set up reactivity on an element's tree we simply invoke  
 * {@link Component#act} passing the element in the context.
 * 
 * @example
 * import { Component } from "element-action";
 * const root = { a: 1, b: 2 };
 * const actionComponent = new Component();
 * actionComponent.act({element: document.querySelector('#myComponent'), root})
 * 
 */
export class Component extends ClassAction<IComponentActionContext> {
    /**
     * All the sub-components used with this component for processing 
     * elements.
     */
    static reactions: ClassAction<any>[] = [ ]

    /**
     * Set to the empty string to disable keys.
     */
    static key = 'default';
    static count = 0;

    key?: string;
    reactionKeys: Set<string> = new Set();
    
    /**
     * Initializes a new instance with the given reactions.
     * 
     * @example
     * import { Component } from "element-action";
     * const root = { a: 1, b: 2 };
     * const Component = new Component();
     * actionComponent.act({element: document.querySelector('#myComponent'), root})
     * 
     * @param reactions 
     */
    constructor(...reactions: ClassAction<any>[]) {
        super(...reactions);
        const key = (<typeof Component>this.constructor).key;
        if (key !== '') {
            this.key = `${key}_${(<typeof Component>this.constructor).count++}`
        }
    }
    /**
     * Processes the given element to setup reactivity on it. This is 
     * a very abstract position and much is left to the reactions to 
     * determine how the element is processed. This function mostly just 
     * provides the overall framework for the processing which is to 
     * recursively process the element and its descendants (until `process` 
     * has been called on all elements in the tree or a reaction uses the 
     * shared context to inform the active component that a given element is 
     * 'closed').
     * 
     * @example
     * import { Component } from "element-action";
     * import { ActionObject } from "action-object";
     * const root = new ActionObject({ a: 1, b: 2 });
     * const actionComponent = new Component();
     * actionComponent.act({element: document.body, root})
     * 
     * @param context 
     * @returns 
     */
    act(context?: IComponentActionContext) {
        if (!context) return;
        if (!(context.root instanceof ActionObject)) context.root = new ActionObject(context.root);
        if (this.key) context.reactionKey = this.key;
        super.act(context);
        return this;
    }

    /**
     * Called from `act` to implement the policy of terminating element 
     * processing when `context.closedElement` is truthy.
     * 
     * @param context 
     * @returns 
     */
    doReactions(context?: IComponentActionContext) {
        for (let reaction of this.getAllReactions(context)) {
            reaction.act(context);
            if (context.closedElement) return delete context.closedElement;
        }

        let child = context.element.firstElementChild;
        while (child) {
            this.act(Object.assign({}, context, { element: child }));
            child = child.nextElementSibling;
        }
    }
}