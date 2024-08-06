import { Component } from "../../dist/element-action.js";
import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert'
import { JSDOM } from 'jsdom'
import { ActionObject } from "action-object";
import { ClassAction } from "class-action";

const window = new JSDOM(`<!DOCTYPE html><body></body>`).window;
const document = window.document;
const body = document.body;

describe('Component.constructor', async (t) => {
    const root = {
        sun: 0,
        planets: {
            mercury: 1,
            venus: 2,
            earth: 3,
            mars: 4,
            jupiter: 5
        },
        colors: {
            red: 'f00',
            green: '0f0',
            blie: '00f'
        }
    }
    await it('Should construct a valid Component', (t) => {
        const actionComponent = new Component();
        assert.equal(actionComponent instanceof Component, true);
        assert.deepEqual(Object.keys(actionComponent), ['reactionKeys', 'key']);
    });
});

describe('Component.act', async (t) => {
    const root = {
        sun: 0,
        planets: {
            mercury: 1,
            venus: 2,
            earth: 3,
            mars: 4,
            jupiter: 5
        },
        colors: {
            red: 'f00',
            green: '0f0',
            blie: '00f'
        }
    }

    await it('Should recursively process an element correctly', (t) => {
        body.innerHTML = `
        <h1> </h1>
        <main>
            <h2></h2>
            <section></section>
            <section></section>
            <aside></aside>
            <section></section>
        </main>
        <footer></footer>
        `;

        class MyComponentReaction extends ClassAction {
            tags = [];
            act(context) {
                this.tags.push(context.element.tagName.toLowerCase());
            }
        }

        const actionComponent = new Component(new MyComponentReaction());
        const context = { element: body, root };
        actionComponent.act(context);
        assert.equal(context.root instanceof ActionObject, true);
        assert.deepEqual(actionComponent.reactions[0].tags, [
            'body', 'h1', 'main', 'h2', 'section', 'section', 'aside', 
            'section', 'footer'
        ]);
    });


    await it('Should not recursively process a closed element', (t) => {
        body.innerHTML = `
        <h1> </h1>
        <main>
            <h2></h2>
            <section></section>
            <section></section>
            <aside></aside>
            <section></section>
        </main>
        <footer></footer>
        `;

        class MyComponentReaction extends ClassAction {
            tags = [];
            act(context) {
                const tag = context.element.tagName.toLowerCase();
                if (tag === 'main') { context.closedElement = true; }
                this.tags.push(tag);
            }
        }

        const actionComponent = new Component(new MyComponentReaction());
        actionComponent.act({ element: body, root });
        assert.deepEqual(actionComponent.reactions[0].tags, [
            'body', 'h1', 'main', 'footer'
        ]);
    });


});


