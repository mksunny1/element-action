**element-action** • [**Docs**](globals.md)

***

# Element Action

This is a simple, composable and extensible library for creating reactive web interfaces. It exports primitives which can be used to describe DOM operations with element attributes. It is based on the [class-action](https://github.com/mksunny1/class-action) and [action-object](https://github.com/mksunny1/action-object) libraries.

Element-action operates based on a Component typw which is a ClassAction sub-type that recursively processes elements to interprete attribute directives. Other class actions (known as component actions) are nested within the component to perform the interpretative functions. This affords enormous flexibility in what meanings can be attached to directives. Component actions for common functions, like linking element properties to javascript variables, have been implemented. Further actions may be created by 3rd-party providers or users themselves.

## Installation

`npm i element-action`

## Usage

```html
<h1>Planets</h1>
<main>
    <h2 t>#planets.mercury</h2>
    <section t>$planets.mercury2</section>
    <section t>#planets.venus</section>
    <aside textContent-p="#sun"></aside>
    <div class-a="#colors.light" t>#planets.earth</div>
</main>
<footer></footer>
```

```js
import { Component } from "element-action";
import { ActionObject } from "active-object";

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
        light: 'yellow',
        dark: 'navy',
        medium: 'red'
    }
}

const component = new Component();
const actionRoot = new ActionObject(root);
const element = document.querySelector('main');
component.act({element, actionRoot})

const colors = actionRoot.getChild('colors');
const planets = actionRoot.getChild('planets')
// 1 link to property set:

// 1.1 linked attribute
colors.set('light', 'green');  
console.log(element.querySelector('div').getAttribute('class'));   // green

// 1.2 linked text content
planets.set('mercury', 'sub-heading 1');  
console.log(element.querySelector('h2').textContent);   // sub-heading 1 

// 2 link to method call:
planets.call('mercury2');  
console.log(element.querySelector('section').textContent);  // 11

```

## Documentation

This library exports class actions for common reactive actions, like data binding. Learn about them [here](_media/Component.md). Loops and conditionals have been deliberately omitted to avoid complicating the library. In scenarios where you need those functions, it is best to use the library within your code to achieve whatever effect you need. This is trivial to implement.

## Contributing

Help improve Element-action by contributing to this project. You can contribute in many ways. See the [contributing guidelines](_media/CONTRIBUTING.md). You can also show your support by sponsoring us.

[![](https://www.paypalobjects.com/en_GB/i/btn/btn_donate_LG.gif)](https://www.paypal.com/donate/?hosted_button_id=S2ZW3RJSDHASW)

Thank you for contributing.

## Sponsors

...
