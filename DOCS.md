# Kitty - docs

## Creating an Element
Elements can be created using the two methods below:

```js
new Kitty('h1')
// or
Kitty.create('h1')
```

## API

### `Kitty`
Represents a Kitty element.

#### Properties
`element` - The actual `HTMLElement`.

#### Constructor
```js
constructor (tagName: string, attrs: Record<string, string> = {})
```

#### Methods

##### `to (parent: HTMLElement | Kitty): Kitty`
Appends the current `Kitty` element to either an `HTMLElement` or `Kitty` element.
###### Usage
```js
// Appending to an HTMLElement
const div = Kitty.create('div')
  .to(document.body)

// or appending to a Kitty element
Kitty.create('span')
  .text('boop')
  .to(div)
```


##### `append (...children: Array<HTMLElement | Kitty>): Kitty`
Appends `HTMLElement` or `Kitty` elements to the current `Kitty` element.
###### Usage
```js
const div = Kitty.create('div')
  .to(document.body)

// Appending a single Kitty element
div.append(
  Kitty.create('h1').text('Heading 1')
)

// Appending an HTMLElement
const h2 = document.createElement('h2')
h2.innerText = 'Heading 2'
div.append(h2)

// Appending multiple elements
const h3 = document.createElement('h3')
h3.innerText = 'Heading 3'
div.append(
  h3,
  Kitty.create('h4').text('Heading 4')
)
```


##### `appendText (text: string): Kitty`
Appends a text node to the current `Kitty` element.
###### Usage
```js
const div = Kitty.create('div')
  .to(document.body)

// Appending a text node
div.appendText('Hello world!')
```


##### `appendMd (markdown: string): Kitty`
Appends markdown to the current `Kitty` element.
###### Usage
```js
const div = Kitty.create('div')
  .to(document.body)

// Appending markdown
div.appendMd('**Hello world!**')
```


##### `attr (name: string, value: string): Kitty`
Adds an attribute to the current `Kitty` element.
###### Usage
```js
const div = Kitty.create('div')
  .to(document.body)

// Adding an attribute
div.attr('data-kitty', 'true')
```


##### `text (text: string): Kitty`
Sets the text of the current `Kitty` element.
###### Usage
```js
const div = Kitty.create('div')
  .to(document.body)

// Setting the text
div.text('Hello world!')
```


##### `md (markdown: string): Kitty`
Sets markdown on the current `Kitty` element.
###### Usage
```js
const div = Kitty.create('div')
  .to(document.body)

// Setting markdown
div.md('**Hello world!**')
```
