**DOM (Document Object Model)** is a programming interface for web documents. It represents the structure of an HTML or XML document as a **tree of objects**, so programming languages like JavaScript can interact with it.

### Key Concepts:

- **Document**: The web page loaded in the browser.
- **Object Model**: Every element (like `<div>`, `<p>`, `<img>`) is represented as an object in a hierarchical structure (tree).

### Example:

For this HTML:

```html
<html>
  <body>
    <h1>Hello</h1>
    <p>World</p>
  </body>
</html>
```

The DOM tree looks like:

```
Document
 └── html
      └── body
           ├── h1
           └── p
```

### JavaScript + DOM:

You can manipulate the document using JavaScript:

```js
document.querySelector("h1").textContent = "Hi!";
```

### What You Can Do with the DOM:

- Read or change HTML content.
- Change styles and attributes.
- Add or remove elements.
- Respond to user actions (clicks, typing, etc.).
