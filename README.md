# Random Quote Generator

An interactive web application that displays a random inspirational quote every time the user clicks a button. The quote and its author appear dynamically without any page reload.

## 🎯 Project Purpose

This project was built for my portfolio to gain a solid, foundational grip on Vanilla JavaScript core concepts.

The code was written by me, using references and examples to support my understanding where needed. No AI-generated code was used. The logic, structure, and implementation decisions are all my own.

## 🚀 JavaScript Features & Concepts Applied

Through this project, I practiced and applied the following JavaScript techniques:

- **Arrays of Objects:** Storing structured quote data (quote text + author name) inside an array of objects as a simple local data source.
- **Random Number Generation:** Using `Math.random()` combined with `Math.floor()` to select a random index within the bounds of the quotes array without going out of range.
- **DOM Selection & Manipulation:** Targeting HTML elements by ID using `document.getElementById()` and updating their content dynamically using `.textContent`.
- **Event-Driven Programming:** Attaching a `click` event listener to the button using `addEventListener()` to trigger the quote generation function on demand.
- **Dynamic CSS Manipulation:** Toggling the visibility of the quote display container programmatically by setting `style.display = "block"` via JavaScript, so it stays hidden until the first quote is generated.
- **Template Literals:** Using backtick strings to cleanly format the displayed quote and author name with custom characters (`"..."` and `~`).


## 🛠️ Tech Stack

- **JavaScript** — Core application logic, random selection & DOM behavior
- **HTML5** — Semantic page structure
- **CSS3** — Visual styling, layout & component design

## 📄 License

This project is open-source and free to use for educational purposes.
