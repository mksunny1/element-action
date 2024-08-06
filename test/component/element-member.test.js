import { Component, ComponentAttrAction, ComponentPropAction, ComponentTextContentAction } from "../../dist/element-action.js";
import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert'
import { ActionObject } from "action-object";
import { JSDOM } from 'jsdom'

const window = new JSDOM(`<!DOCTYPE html><body></body>`).window;
const document = window.document;
const body = document.body;

globalThis.Element = window.Element
globalThis.document = window.document
globalThis.window = window;

const root = {
    sun: 0,
    planets: {
        mercury: 1,
        mercury2() { return 11;},
        venus: 2,
        earth: 3,
        mars: 4,
        jupiter: 5
    },
    colors: {
        red: 'f00',
        green: '0f0',
        green2() { return '00ff00'},
        blie: '00f'
    }
}

class MyAttrComponent extends Component {
    static reactions = [ 
        new ComponentAttrAction()
    ];
}
class MyTextContentComponent extends Component {
    static reactions = [ 
        new ComponentTextContentAction()
    ];
}
class MyPropComponent extends Component {
    static reactions = [ 
        new ComponentPropAction()
    ];
}

describe('ComponentAttrAction.act', async (t) => {
    body.innerHTML = `
        <h1>Planets</h1>
        <main>
            <h2 t>#planets.mercury</h2>
            <section t>$planets.mercury2</section>
            <section t>#planets.venus</section>
            <aside textContent-p="#sun"></aside>
            <div class-a="#colors.green" t>#planets.earth</div>
        </main>
        <footer></footer>
    `;

    await it('Should correctly link the element attributes', (t) => {
        // initialize your primitives
        const actionRoot = new ActionObject(root);
        const actionComponent = new MyAttrComponent();

        // generate reactivity actions from attributes
        actionComponent.act( { element: body, root: actionRoot } );

        const colors = actionRoot.getChild('colors');
        assert.equal(body.querySelector('div').getAttribute('class'), null);
        colors.set('green', 'aaaaaa');  
        assert.equal(body.querySelector('div').getAttribute('class'), 'aaaaaa');

    });
    
});

describe('ComponentTextContentAction.act', async (t) => {
    body.innerHTML = `
        <h1>Planets</h1>
        <main>
            <h2 t>#planets.mercury</h2>
            <section t>$planets.mercury2</section>
            <section t>#planets.venus</section>
            <aside textContent-p="#sun"></aside>
            <div class-a="#colors.green" t>#planets.earth</div>
        </main>
        <footer></footer>
    `;

    await it('Should correctly link the element text content', (t) => {
        // initialize your primitives
        const actionRoot = new ActionObject(root);
        const actionComponent = new MyTextContentComponent();

        assert.equal(body.querySelector('h2').textContent, '#planets.mercury');
        
        // generate reactivity actions from attributes
        actionComponent.act( { element: body, root: actionRoot } );  
        const planets = actionRoot.getChild('planets')
        
        assert.equal(body.querySelector('h2').textContent, '');
        planets.set('mercury', '1001');  
        assert.equal(body.querySelector('h2').textContent, '1001');  

        assert.equal(body.querySelector('section').textContent, '');   
        planets.call('mercury2');  
        assert.equal(body.querySelector('section').textContent, '11');  
    });
    
});

describe('ComponentPropAction.act', async (t) => {
    body.innerHTML = `
        <h1>Planets</h1>
        <main>
            <h2 t>#planets.mercury</h2>
            <section t>$planets.mercury2</section>
            <section t>#planets.venus</section>
            <aside textContent-p="#sun"></aside>
            <div class-a="#colors.green" t>#planets.earth</div>
        </main>
        <footer></footer>
    `;

    await it('Should correctly link the element properties', (t) => {
        // initialize your primitives
        const actionRoot = new ActionObject(root);
        const actionComponent = new MyPropComponent();
        
        // generate reactivity actions from attributes
        actionComponent.act( { element: body, root: actionRoot } );  
        
        assert.equal(body.querySelector('aside').textContent, '');
        actionRoot.set('sun', '1000');  
        assert.equal(body.querySelector('aside').textContent, '1000');     

    });
    
});
