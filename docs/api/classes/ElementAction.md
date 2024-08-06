[**element-action**](../README.md) • **Docs**

***

[element-action](../globals.md) / ElementAction

# Class: ElementAction\<T\>

## Extends

- `ClassAction`\<`T`\>

## Extended by

- [`ElementMemberAction`](ElementMemberAction.md)

## Type Parameters

• **T**

## Constructors

### new ElementAction()

> **new ElementAction**\<`T`\>(`element`, ...`reactions`): [`ElementAction`](ElementAction.md)\<`T`\>

#### Parameters

• **element**: `Element`

• ...**reactions**: `ClassAction`\<`any`\>[]

#### Returns

[`ElementAction`](ElementAction.md)\<`T`\>

#### Overrides

`ClassAction<T>.constructor`

#### Defined in

[src/element-action/element-actions.ts:8](https://github.com/mksunny1/element-action/blob/069387d31a8c3558646d97c8e67f5eae108721ba/src/element-action/element-actions.ts#L8)

## Properties

### element

> **element**: `Element`

#### Defined in

[src/element-action/element-actions.ts:6](https://github.com/mksunny1/element-action/blob/069387d31a8c3558646d97c8e67f5eae108721ba/src/element-action/element-actions.ts#L6)

***

### keyedReactions?

> `optional` **keyedReactions**: `object`

#### Index Signature

 \[`key`: `IKey`\]: `ClassAction`\<`any`\>[]

#### Inherited from

`ClassAction.keyedReactions`

#### Defined in

[node\_modules/class-action/dist/class-action.d.ts:57](https://github.com/mksunny1/element-action/blob/069387d31a8c3558646d97c8e67f5eae108721ba/node_modules/class-action/dist/class-action.d.ts#L57)

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

[node\_modules/class-action/dist/class-action.d.ts:56](https://github.com/mksunny1/element-action/blob/069387d31a8c3558646d97c8e67f5eae108721ba/node_modules/class-action/dist/class-action.d.ts#L56)

***

### reactions

> `static` **reactions**: `ClassAction`\<`any`\>[]

Static reactions. These will be associated with all class-action
instances created with the same class without being present on
every instance. In most cases, such actions should be stateless,
though you may deliberately want to share state in some scenarios.

#### Example

```ts
import { ClassAction } from 'class-action'
const reaction1 = new ClassAction(), reaction2 = new ClassAction();
class MyClassAction extends ClassAction {
   static reactions = [reaction1, reaction2]
}
const myClassAction1 = new MyClassAction();
const myClassAction2 = new MyClassAction();
```

#### Inherited from

`ClassAction.reactions`

#### Defined in

[node\_modules/class-action/dist/class-action.d.ts:44](https://github.com/mksunny1/element-action/blob/069387d31a8c3558646d97c8e67f5eae108721ba/node_modules/class-action/dist/class-action.d.ts#L44)

## Methods

### act()

> **act**(`context`?): `any`

Performs the local action and triggers all reactions.

#### Parameters

• **context?**: `T`

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
myClassAction.act({ msg: 'nice work' });
// prints 'nice work' thrice...
```

#### Inherited from

`ClassAction.act`

#### Defined in

[node\_modules/class-action/dist/class-action.d.ts:134](https://github.com/mksunny1/element-action/blob/069387d31a8c3558646d97c8e67f5eae108721ba/node_modules/class-action/dist/class-action.d.ts#L134)

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

[node\_modules/class-action/dist/class-action.d.ts:194](https://github.com/mksunny1/element-action/blob/069387d31a8c3558646d97c8e67f5eae108721ba/node_modules/class-action/dist/class-action.d.ts#L194)

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

[node\_modules/class-action/dist/class-action.d.ts:187](https://github.com/mksunny1/element-action/blob/069387d31a8c3558646d97c8e67f5eae108721ba/node_modules/class-action/dist/class-action.d.ts#L187)

***

### doAction()

> **doAction**(`context`?): `any`

Performs the local action

#### Parameters

• **context?**: `T`

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

[node\_modules/class-action/dist/class-action.d.ts:151](https://github.com/mksunny1/element-action/blob/069387d31a8c3558646d97c8e67f5eae108721ba/node_modules/class-action/dist/class-action.d.ts#L151)

***

### doReactions()

> **doReactions**(`context`?): `any`

Triggers all reactions of this ClassAction

#### Parameters

• **context?**: `T`

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
myClassAction.doReactions({ msg: 'nice work' });
// prints 'nice work' twice...
```

#### Inherited from

`ClassAction.doReactions`

#### Defined in

[node\_modules/class-action/dist/class-action.d.ts:168](https://github.com/mksunny1/element-action/blob/069387d31a8c3558646d97c8e67f5eae108721ba/node_modules/class-action/dist/class-action.d.ts#L168)

***

### getAllReactions()

> **getAllReactions**(`context`?): `Generator`\<`ClassAction`\<`any`\>, `void`, `unknown`\>

Gets all class and instance reactions. This is used internally
to obtain all reactions to trigger after the local action has
been executed.

#### Parameters

• **context?**: `T`

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

[node\_modules/class-action/dist/class-action.d.ts:118](https://github.com/mksunny1/element-action/blob/069387d31a8c3558646d97c8e67f5eae108721ba/node_modules/class-action/dist/class-action.d.ts#L118)

***

### getReactions()

> **getReactions**(`context`?): `Generator`\<`ClassAction`\<`any`\>, `void`, `unknown`\>

Returns all instance reactions of this ClassAction.
By default it simply returns [ClassAction#reactions](Component.md#reactions).

#### Parameters

• **context?**: `T`

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

[node\_modules/class-action/dist/class-action.d.ts:100](https://github.com/mksunny1/element-action/blob/069387d31a8c3558646d97c8e67f5eae108721ba/node_modules/class-action/dist/class-action.d.ts#L100)

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

[node\_modules/class-action/dist/class-action.d.ts:213](https://github.com/mksunny1/element-action/blob/069387d31a8c3558646d97c8e67f5eae108721ba/node_modules/class-action/dist/class-action.d.ts#L213)

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

[node\_modules/class-action/dist/class-action.d.ts:206](https://github.com/mksunny1/element-action/blob/069387d31a8c3558646d97c8e67f5eae108721ba/node_modules/class-action/dist/class-action.d.ts#L206)

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

[node\_modules/class-action/dist/class-action.d.ts:86](https://github.com/mksunny1/element-action/blob/069387d31a8c3558646d97c8e67f5eae108721ba/node_modules/class-action/dist/class-action.d.ts#L86)
