[**element-action**](../README.md) • **Docs**

***

[element-action](../globals.md) / ComponentAttrAction

# Class: ComponentAttrAction

An action which interpretes attributes on elements to create 
reactivity actions. All actions derive from ClassAction

## Example

```ts
import { ComponentAction } from 'action-component'
import { ActionObject } from 'action-object'

const actions = {};
class MyComponentAction extends ComponentAction {
 createActions(context) {
     return {
         'planets.mercury': {
              call: [
                  { act(context) { actions['mercury.call'] = context.value } }
              ]
          },
     }
 }
}

const root = { planets: { mercury: () => 11 } }
const actionRoot = new ActionObject(root)
const componentAction = new MyComponentAction();
const context = { root: actionRoot }
componentAction.act(context);
actionRoot.getChild('planets').call('mercury')
console.log(actions['mercury.call']);   // 11
```

## Extends

- [`ComponentMemberAction`](ComponentMemberAction.md)

## Constructors

### new ComponentAttrAction()

> **new ComponentAttrAction**(...`reactions`): [`ComponentAttrAction`](ComponentAttrAction.md)

Creates a new ClassAction object containing the optionally provided reactions.

#### Parameters

• ...**reactions**: `ClassAction`\<`any`\>[]

#### Returns

[`ComponentAttrAction`](ComponentAttrAction.md)

#### Example

```ts
import { ClassAction } from 'class-action'
const classAction = new ClassAction()
```

#### Inherited from

[`ComponentMemberAction`](ComponentMemberAction.md).[`constructor`](ComponentMemberAction.md#constructors)

#### Defined in

[node\_modules/class-action/dist/class-action.d.ts:69](https://github.com/mksunny1/element-action/blob/069387d31a8c3558646d97c8e67f5eae108721ba/node_modules/class-action/dist/class-action.d.ts#L69)

## Properties

### keyedReactions?

> `optional` **keyedReactions**: `object`

#### Index Signature

 \[`key`: `IKey`\]: `ClassAction`\<`any`\>[]

#### Inherited from

[`ComponentMemberAction`](ComponentMemberAction.md).[`keyedReactions`](ComponentMemberAction.md#keyedreactions)

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

[`ComponentMemberAction`](ComponentMemberAction.md).[`reactions`](ComponentMemberAction.md#reactions)

#### Defined in

[node\_modules/class-action/dist/class-action.d.ts:56](https://github.com/mksunny1/element-action/blob/069387d31a8c3558646d97c8e67f5eae108721ba/node_modules/class-action/dist/class-action.d.ts#L56)

***

### calcSep

> `static` **calcSep**: `string` = `':'`

#### Inherited from

[`ComponentMemberAction`](ComponentMemberAction.md).[`calcSep`](ComponentMemberAction.md#calcsep)

#### Defined in

[src/component/component-action.ts:62](https://github.com/mksunny1/element-action/blob/069387d31a8c3558646d97c8e67f5eae108721ba/src/component/component-action.ts#L62)

***

### calcs

> `static` **calcs**: `IMap`\<*typeof* [`CalcAction`](CalcAction.md)\> = `{}`

#### Inherited from

[`ComponentMemberAction`](ComponentMemberAction.md).[`calcs`](ComponentMemberAction.md#calcs)

#### Defined in

[src/component/component-action.ts:66](https://github.com/mksunny1/element-action/blob/069387d31a8c3558646d97c8e67f5eae108721ba/src/component/component-action.ts#L66)

***

### callPrefix

> `static` **callPrefix**: `string` = `'$'`

#### Inherited from

[`ComponentMemberAction`](ComponentMemberAction.md).[`callPrefix`](ComponentMemberAction.md#callprefix)

#### Defined in

[src/component/component-action.ts:64](https://github.com/mksunny1/element-action/blob/069387d31a8c3558646d97c8e67f5eae108721ba/src/component/component-action.ts#L64)

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

[`ComponentMemberAction`](ComponentMemberAction.md).[`reactions`](ComponentMemberAction.md#reactions-1)

#### Defined in

[node\_modules/class-action/dist/class-action.d.ts:44](https://github.com/mksunny1/element-action/blob/069387d31a8c3558646d97c8e67f5eae108721ba/node_modules/class-action/dist/class-action.d.ts#L44)

***

### setPrefix

> `static` **setPrefix**: `string` = `'#'`

#### Inherited from

[`ComponentMemberAction`](ComponentMemberAction.md).[`setPrefix`](ComponentMemberAction.md#setprefix)

#### Defined in

[src/component/component-action.ts:63](https://github.com/mksunny1/element-action/blob/069387d31a8c3558646d97c8e67f5eae108721ba/src/component/component-action.ts#L63)

***

### suffix

> `static` **suffix**: `string` = `'-a'`

#### Overrides

[`ComponentMemberAction`](ComponentMemberAction.md).[`suffix`](ComponentMemberAction.md#suffix)

#### Defined in

[src/component/element-member.ts:32](https://github.com/mksunny1/element-action/blob/069387d31a8c3558646d97c8e67f5eae108721ba/src/component/element-member.ts#L32)

***

### valueSep

> `static` **valueSep**: `string` = `'+'`

#### Inherited from

[`ComponentMemberAction`](ComponentMemberAction.md).[`valueSep`](ComponentMemberAction.md#valuesep)

#### Defined in

[src/component/component-action.ts:65](https://github.com/mksunny1/element-action/blob/069387d31a8c3558646d97c8e67f5eae108721ba/src/component/component-action.ts#L65)

## Methods

### act()

> **act**(`context`): `any`

Creates actions from attributes of the `context.element` and 
adds them to the first root in `context.root` which contains 
the path referenced in the element attribute(s).

#### Parameters

• **context**: [`IComponentActionContext`](../interfaces/IComponentActionContext.md)

#### Returns

`any`

#### Inherited from

[`ComponentMemberAction`](ComponentMemberAction.md).[`act`](ComponentMemberAction.md#act)

#### Defined in

[src/component/component-action.ts:75](https://github.com/mksunny1/element-action/blob/069387d31a8c3558646d97c8e67f5eae108721ba/src/component/component-action.ts#L75)

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

[`ComponentMemberAction`](ComponentMemberAction.md).[`addKeyedReactions`](ComponentMemberAction.md#addkeyedreactions)

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

[`ComponentMemberAction`](ComponentMemberAction.md).[`addReactions`](ComponentMemberAction.md#addreactions)

#### Defined in

[node\_modules/class-action/dist/class-action.d.ts:187](https://github.com/mksunny1/element-action/blob/069387d31a8c3558646d97c8e67f5eae108721ba/node_modules/class-action/dist/class-action.d.ts#L187)

***

### createActions()

> **createActions**(`context`): `IMap`\<`object`\>

#### Parameters

• **context**: [`IComponentActionContext`](../interfaces/IComponentActionContext.md)

#### Returns

`IMap`\<`object`\>

##### call?

> `optional` **call**: `ClassAction`\<`any`\>[]

##### set?

> `optional` **set**: `ClassAction`\<`any`\>[]

#### Inherited from

[`ComponentMemberAction`](ComponentMemberAction.md).[`createActions`](ComponentMemberAction.md#createactions)

#### Defined in

[src/component/element-member.ts:12](https://github.com/mksunny1/element-action/blob/069387d31a8c3558646d97c8e67f5eae108721ba/src/component/element-member.ts#L12)

***

### createMemberAction()

> **createMemberAction**(`element`, `name`): [`ElementMemberAction`](ElementMemberAction.md)\<[`IElementMemberActionContext`](../interfaces/IElementMemberActionContext.md)\>

#### Parameters

• **element**: `Element`

• **name**: `string`

#### Returns

[`ElementMemberAction`](ElementMemberAction.md)\<[`IElementMemberActionContext`](../interfaces/IElementMemberActionContext.md)\>

#### Overrides

[`ComponentMemberAction`](ComponentMemberAction.md).[`createMemberAction`](ComponentMemberAction.md#creatememberaction)

#### Defined in

[src/component/element-member.ts:33](https://github.com/mksunny1/element-action/blob/069387d31a8c3558646d97c8e67f5eae108721ba/src/component/element-member.ts#L33)

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

[`ComponentMemberAction`](ComponentMemberAction.md).[`doAction`](ComponentMemberAction.md#doaction)

#### Defined in

[node\_modules/class-action/dist/class-action.d.ts:151](https://github.com/mksunny1/element-action/blob/069387d31a8c3558646d97c8e67f5eae108721ba/node_modules/class-action/dist/class-action.d.ts#L151)

***

### doReactions()

> **doReactions**(`context`?): `any`

Triggers all reactions of this ClassAction

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
myClassAction.doReactions({ msg: 'nice work' });
// prints 'nice work' twice...
```

#### Inherited from

[`ComponentMemberAction`](ComponentMemberAction.md).[`doReactions`](ComponentMemberAction.md#doreactions)

#### Defined in

[node\_modules/class-action/dist/class-action.d.ts:168](https://github.com/mksunny1/element-action/blob/069387d31a8c3558646d97c8e67f5eae108721ba/node_modules/class-action/dist/class-action.d.ts#L168)

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

[`ComponentMemberAction`](ComponentMemberAction.md).[`getAllReactions`](ComponentMemberAction.md#getallreactions)

#### Defined in

[node\_modules/class-action/dist/class-action.d.ts:118](https://github.com/mksunny1/element-action/blob/069387d31a8c3558646d97c8e67f5eae108721ba/node_modules/class-action/dist/class-action.d.ts#L118)

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

[`ComponentMemberAction`](ComponentMemberAction.md).[`getReactions`](ComponentMemberAction.md#getreactions)

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

[`ComponentMemberAction`](ComponentMemberAction.md).[`removeKeyedReactions`](ComponentMemberAction.md#removekeyedreactions)

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

[`ComponentMemberAction`](ComponentMemberAction.md).[`removeReactions`](ComponentMemberAction.md#removereactions)

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

[`ComponentMemberAction`](ComponentMemberAction.md).[`getReactions`](ComponentMemberAction.md#getreactions-1)

#### Defined in

[node\_modules/class-action/dist/class-action.d.ts:86](https://github.com/mksunny1/element-action/blob/069387d31a8c3558646d97c8e67f5eae108721ba/node_modules/class-action/dist/class-action.d.ts#L86)
