# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Homebrew <a name="Homebrew" id="@nikovirtala/projen-homebrew.Homebrew"></a>

#### Initializers <a name="Initializers" id="@nikovirtala/projen-homebrew.Homebrew.Initializer"></a>

```typescript
import { Homebrew } from '@nikovirtala/projen-homebrew'

new Homebrew(project: Project, options?: HomebrewOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-homebrew.Homebrew.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-homebrew.Homebrew.Initializer.parameter.options">options</a></code> | <code><a href="#@nikovirtala/projen-homebrew.HomebrewOptions">HomebrewOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@nikovirtala/projen-homebrew.Homebrew.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Optional</sup> <a name="options" id="@nikovirtala/projen-homebrew.Homebrew.Initializer.parameter.options"></a>

- *Type:* <a href="#@nikovirtala/projen-homebrew.HomebrewOptions">HomebrewOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-homebrew.Homebrew.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@nikovirtala/projen-homebrew.Homebrew.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@nikovirtala/projen-homebrew.Homebrew.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@nikovirtala/projen-homebrew.Homebrew.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@nikovirtala/projen-homebrew.Homebrew.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@nikovirtala/projen-homebrew.Homebrew.addPackage">addPackage</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@nikovirtala/projen-homebrew.Homebrew.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@nikovirtala/projen-homebrew.Homebrew.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@nikovirtala/projen-homebrew.Homebrew.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `postSynthesize` <a name="postSynthesize" id="@nikovirtala/projen-homebrew.Homebrew.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@nikovirtala/projen-homebrew.Homebrew.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@nikovirtala/projen-homebrew.Homebrew.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addPackage` <a name="addPackage" id="@nikovirtala/projen-homebrew.Homebrew.addPackage"></a>

```typescript
public addPackage(packageName: string): void
```

###### `packageName`<sup>Required</sup> <a name="packageName" id="@nikovirtala/projen-homebrew.Homebrew.addPackage.parameter.packageName"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-homebrew.Homebrew.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@nikovirtala/projen-homebrew.Homebrew.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#@nikovirtala/projen-homebrew.Homebrew.of">of</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@nikovirtala/projen-homebrew.Homebrew.isConstruct"></a>

```typescript
import { Homebrew } from '@nikovirtala/projen-homebrew'

Homebrew.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/projen-homebrew.Homebrew.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@nikovirtala/projen-homebrew.Homebrew.isComponent"></a>

```typescript
import { Homebrew } from '@nikovirtala/projen-homebrew'

Homebrew.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/projen-homebrew.Homebrew.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@nikovirtala/projen-homebrew.Homebrew.of"></a>

```typescript
import { Homebrew } from '@nikovirtala/projen-homebrew'

Homebrew.of(project: Project)
```

###### `project`<sup>Required</sup> <a name="project" id="@nikovirtala/projen-homebrew.Homebrew.of.parameter.project"></a>

- *Type:* projen.Project

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-homebrew.Homebrew.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@nikovirtala/projen-homebrew.Homebrew.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@nikovirtala/projen-homebrew.Homebrew.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@nikovirtala/projen-homebrew.Homebrew.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


## Structs <a name="Structs" id="Structs"></a>

### HomebrewOptions <a name="HomebrewOptions" id="@nikovirtala/projen-homebrew.HomebrewOptions"></a>

#### Initializer <a name="Initializer" id="@nikovirtala/projen-homebrew.HomebrewOptions.Initializer"></a>

```typescript
import { HomebrewOptions } from '@nikovirtala/projen-homebrew'

const homebrewOptions: HomebrewOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-homebrew.HomebrewOptions.property.packages">packages</a></code> | <code>string[]</code> | *No description.* |

---

##### `packages`<sup>Optional</sup> <a name="packages" id="@nikovirtala/projen-homebrew.HomebrewOptions.property.packages"></a>

```typescript
public readonly packages: string[];
```

- *Type:* string[]

---



