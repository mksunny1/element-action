[**element-action**](../README.md) • **Docs**

***

[element-action](../globals.md) / Component

# Class: Component

An object used for setting up reactivity in DOM trees.
It is first initialized with a top-level ActionObject (root). Then to 
set up reactivity on an element's tree we simply invoke  
[Component#act](Component.md#act) passing the element in the context.

## Example

```ts
import { Component } from "element-action";
const root = { a: 1, b: 2 };
const actionComponent = new Component();
actionComponent.act({element: document.querySelector('#myComponent'), root})
```

## Extends

- `ClassAction`\<[`IComponentActionContext`](../interfaces/IComponentActionContext.md)\>

## Constructors

### new Component()

> **new Component**(...`reactions`): [`Component`](Component.md)

Initializes a new instance with the given reactions.

#### Parameters

• ...**reactions**: `ClassAction`\<`any`\>[]

#### Returns

[`Component`](Component.md)

#### Example

```ts
import { Component } from "element-action";
const root = { a: 1, b: 2 };
const Component = new Component();
actionComponent.act({element: document.querySelector('#myComponent'), root})
```

#### Overrides

`ClassAction<IComponentActionContext>.constructor`

#### Defined in

src/component/component.ts:51

## Properties

### key?

> `optional` **key**: `string`

#### Defined in

src/component/component.ts:37

***

### keyedReactions?

> `optional` **keyedReactions**: `object`

#### Index Signature

 \[`key`: `IKey`\]: `ClassAction`\<`any`\>[]

#### Inherited from

`ClassAction.keyedReactions`

#### Defined in

[node\_modules/class-action/dist/class-action.d.ts:57](https://github.com/mksunny1/active-component/blob/ab3eae5e00c8ea5a02ab14e0fd89ac76a2d7babd/node_modules/class-action/dist/class-action.d.ts#L57)

***

### reactionKeys

> **reactionKeys**: `Set`\<`string`\>

#### Defined in

src/component/component.ts:38

***

### reactions?

> `optional` **reactions**: `ClassAction`\<`any`\>[]

Instance reactions. These are reactions added to every class-action
instance. They may be necessary when they require internal state that
differ between instances.

#### Example

```ts
import { ClassAction } from 'class-action'
const reaction1 = new ClassAction(), reaction2 = new ClassAction();
const myClassAction = new ClassAction(reaction1, reaction2);
```

#### Inherited from

`ClassAction.reactions`

#### Defined in

[node\_modules/class-action/dist/class-action.d.ts:56](https://github.com/mksunny1/active-component/blob/ab3eae5e00c8ea5a02ab14e0fd89ac76a2d7babd/node_modules/class-action/dist/class-action.d.ts#L56)

***

### count

> `static` **count**: `number` = `0`

#### Defined in

src/component/component.ts:35

***

### key

> `static` **key**: `string` = `'default'`

Set to the empty string to disable keys.

#### Defined in

src/component/component.ts:34

***

### reactions

> `static` **reactions**: `ClassAction`\<`any`\>[] = `[]`

All the sub-components used with this component for processing 
elements.

#### Overrides

`ClassAction.reactions`

#### Defined in

src/component/component.ts:29

## Methods

### act()

> **act**(`context`?): [`Component`](Component.md)

Processes the given element to setup reactivity on it. This is 
a very abstract position and much is left to the reactions to 
determine how the element is processed. This function mostly just 
provides the overall framework for the processing which is to 
recursively process the element and its descendants (until `process` 
has been called on all elements in the tree or a reaction uses the 
shared context to inform the active component that a given element is 
'closed').

#### Parameters

• **context?**: [`IComponentActionContext`](../interfaces/IComponentActionContext.md)

#### Returns

[`Component`](Component.md)

#### Example

```ts
import { Component } from "element-action";
import { ActionObject } from "action-object";
const root = new ActionObject({ a: 1, b: 2 });
const actionComponent = new Component();
actionComponent.act({element: document.body, root})
```

#### Overrides

`ClassAction.act`

#### Defined in

src/component/component.ts:78

***

### addKeyedReactions()

> **addKeyedReactions**(`reactionKey`, ...`reactions`): `void`

Adds the given reactions to the list of reactions with the key.

#### Parameters

• **reactionKey**: `IKey`

• ...**reactions**: `ClassAction`\<`any`\>[]

#### Returns

`void`

#### Inherited from

`ClassAction.addKeyedReactions`

#### Defined in

[node\_modules/class-action/dist/class-action.d.ts:194](https://github.com/mksunny1/active-component/blob/ab3eae5e00c8ea5a02ab14e0fd89ac76a2d7babd/node_modules/class-action/dist/class-action.d.ts#L194)

***

### addReactions()

> **addReactions**(...`reactions`): `void`

Adds the given reactions to this ClassAction. This allows for
more implementation flexibility in derived classes.

#### Parameters

• ...**reactions**: `ClassAction`\<`any`\>[]

#### Returns

`void`

#### Example

```ts
import { ClassAction } from 'class-action'
const reaction1 = new ClassAction(), reaction2 = new ClassAction();
const myClassAction = new ClassAction(reaction1, reaction2);
class MyClassAction extends ClassAction {
   doAction(context) {
     console.log('Added reaction');
   }
}
myClassAction.addReactions(new MyClassAction())
myClassAction.act()
```

#### Inherited from

`ClassAction.addReactions`

#### Defined in

[node\_modules/class-action/dist/class-action.d.ts:187](https://github.com/mksunny1/active-component/blob/ab3eae5e00c8ea5a02ab14e0fd89ac76a2d7babd/node_modules/class-action/dist/class-action.d.ts#L187)

***

### doAction()

> **doAction**(`context`?): `any`

Performs the local action

#### Parameters

• **context?**: [`IComponentActionContext`](../interfaces/IComponentActionContext.md)

#### Returns

`any`

#### Example

```ts
import { ClassAction } from 'class-action'
class MyClassAction extends ClassAction {
   doAction(context) {
     console.log(context.msg);
   }
}
const myClassAction = new MyClassAction(new MyClassAction(), new MyClassAction());
myClassAction.doAction({ msg: 'nice work' });
// prints 'nice work' once...
```

#### Inherited from

`ClassAction.doAction`

#### Defined in

[node\_modules/class-action/dist/class-action.d.ts:151](https://github.com/mksunny1/active-component/blob/ab3eae5e00c8ea5a02ab14e0fd89ac76a2d7babd/node_modules/class-action/dist/class-action.d.ts#L151)

***

### doReactions()

> **doReactions**(`context`?): `boolean`

Called from `act` to implement the policy of terminating element 
processing when `context.closedElement` is truthy.

#### Parameters

• **context?**: [`IComponentActionContext`](../interfaces/IComponentActionContext.md)

#### Returns

`boolean`

#### Overrides

`ClassAction.doReactions`

#### Defined in

src/component/component.ts:93

***

### getAllReactions()

> **getAllReactions**(`context`?): `Generator`\<`ClassAction`\<`any`\>, `void`, `unknown`\>

Gets all class and instance reactions. This is used internally
to obtain all reactions to trigger after the local action has
been executed.

#### Parameters

• **context?**: [`IComponentActionContext`](../interfaces/IComponentActionContext.md)

#### Returns

`Generator`\<`ClassAction`\<`any`\>, `void`, `unknown`\>

#### Example

```ts
import { ClassAction } from 'class-action'
const reaction1 = new ClassAction(), reaction2 = new ClassAction();
class MyClassAction extends ClassAction {
   static reactions = [reaction1, reaction2]
}
const myClassAction = new MyClassAction(reaction1, reaction2);
myClassAction.getAllReactions();
```

#### Inherited from

`ClassAction.getAllReactions`

#### Defined in

[node\_modules/class-action/dist/class-action.d.ts:118](https://github.com/mksunny1/active-component/blob/ab3eae5e00c8ea5a02ab14e0fd89ac76a2d7babd/node_modules/class-action/dist/class-action.d.ts#L118)

***

### getReactions()

> **getReactions**(`context`?): `Generator`\<`ClassAction`\<`any`\>, `void`, `unknown`\>

Returns all instance reactions of this ClassAction.
By default it simply returns [ClassAction#reactions](Component.md#reactions).

#### Parameters

• **context?**: [`IComponentActionContext`](../interfaces/IComponentActionContext.md)

#### Returns

`Generator`\<`ClassAction`\<`any`\>, `void`, `unknown`\>

#### Example

```ts
import { ClassAction } from 'class-action'
const reaction1 = new ClassAction(), reaction2 = new ClassAction();
const myClassAction = new ClassAction(reaction1, reaction2);
myClassAction.getReactions();
```

#### Inherited from

`ClassAction.getReactions`

#### Defined in

[node\_modules/class-action/dist/class-action.d.ts:100](https://github.com/mksunny1/active-component/blob/ab3eae5e00c8ea5a02ab14e0fd89ac76a2d7babd/node_modules/class-action/dist/class-action.d.ts#L100)

***

### removeKeyedReactions()

> **removeKeyedReactions**(...`reactionKeys`): `void`

Removes the reactions with the specified keys.

#### Parameters

• ...**reactionKeys**: `IKey`[]

#### Returns

`void`

#### Inherited from

`ClassAction.removeKeyedReactions`

#### Defined in

[node\_modules/class-action/dist/class-action.d.ts:213](https://github.com/mksunny1/active-component/blob/ab3eae5e00c8ea5a02ab14e0fd89ac76a2d7babd/node_modules/class-action/dist/class-action.d.ts#L213)

***

### removeReactions()

> **removeReactions**(...`reactions`): `void`

Removes the specified reactions.

#### Parameters

• ...**reactions**: `ClassAction`\<`any`\>[]

#### Returns

`void`

#### Example

```ts
import { ClassAction } from 'class-action'
const reaction1 = new ClassAction(), reaction2 = new ClassAction();
const myClassAction = new ClassAction(reaction1, reaction2);
myClassAction.removeReactions(reaction2);
```

#### Inherited from

`ClassAction.removeReactions`

#### Defined in

[node\_modules/class-action/dist/class-action.d.ts:206](https://github.com/mksunny1/active-component/blob/ab3eae5e00c8ea5a02ab14e0fd89ac76a2d7babd/node_modules/class-action/dist/class-action.d.ts#L206)

***

### getReactions()

> `static` **getReactions**\<`T`\>(`context`?): `ClassAction`\<`any`\>[]

This is the method called by instances to obtain the static reactions.
It enables a more dynamic way of overriding static reactions in a
derived class.
By default it simply returns [ClassAction.reactions](ComponentAction.md#reactions-1).

#### Type Parameters

• **T**

#### Parameters

• **context?**: `T`

#### Returns

`ClassAction`\<`any`\>[]

#### Example

```ts
import { ClassAction } from 'class-action'
const reaction1 = new ClassAction(), reaction2 = new ClassAction();
class MyClassAction extends ClassAction {
   static reactions = [reaction1, reaction2]
}
MyClassAction.getReactions();
```

#### Inherited from

`ClassAction.getReactions`

#### Defined in

[node\_modules/class-action/dist/class-action.d.ts:86](https://github.com/mksunny1/active-component/blob/ab3eae5e00c8ea5a02ab14e0fd89ac76a2d7babd/node_modules/class-action/dist/class-action.d.ts#L86)
