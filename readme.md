# CLI Portfolio

![CLI Portfolio](/static/123.gif)

[**CLI Portfolio**](https://sayhan1610.github.io/cli_portfolio) is a sleek, terminal-themed personal portfolio designed to make a lasting impression while being incredibly developer-friendly. So yeah, it's not just another portfolio template—it's an experience, offering simplicity, customizability, and style in a way you've never seen before.

---

## ✨ Why Choose CLI Portfolio?

### 1. **A Unique Terminal Experience**

Remember the excitement of typing commands in a terminal for the first time? With CLI Portfolio, your visitors can relive that thrill! Featuring a typewriter-style interface, lime-green text on a black background, and fun ASCII art ~~(yes, I'm obsessed with ducks)~~, this portfolio turns browsing into an adventure.

### 2. **Effortless Customization**

Hate digging through code to update your content? No worries, matey! This project fetches all its contents from simple JSON files. This means you can:

- Add or edit pages like `about`, `skills`, `projects`, and more without touching the core code.
- Customize commands and page content as easily as editing text.
- Focus on your story while the code does the heavy lifting.

### 3. **Better Open Source Project**

Unlike most portfolios that come with rigid structures, CLI Portfolio is:

- **Highly Modular**: Every page and command is treated as a separate route. Want to add a new feature? Just add a JSON file and update the routes!
- **Lightweight and Responsive**: Works like a charm on desktop and mobile browsers.
- **Extensible**: Add new themes, commands, or functionality without breaking a sweat.

### 4. **Geek-Approved Design**

The aesthetics are perfect for developers, engineers, and tech enthusiasts who want to showcase their skills while standing out. It feels like hacking into something cool, except the only thing getting hacked is the visitor's attention.

---

## 🎮 Features

- **Command-based Navigation**: Navigate through sections like `about`, `experience`, `skills`, `projects`, and more using terminal-like commands.
- **Interactive Help Menu**: Just type `help` to see all available commands.
- **Dynamic Content Loading**: Pages are fetched dynamically from JSON files, ensuring seamless updates.
- **Clear Functionality**: Clean up the terminal with the `clear` command.
- **Cross-Browser Compatibility**: Works on all modern browsers.

## 🛠️ Installation & Setup

### 1. **Clone the Repository**

```bash
$ git clone https://github.com/sayhan1610/cli_portfolio.git
$ cd cli_portfolio
```

### 2. **Host Locally for Development ~~(Just opening index.html will not work)~~**

For example, with Python:

```bash
$ python -m http.server
```

Then open `http://localhost:8000` in your browser.

### 3. **Customize Your Portfolio**

- **Edit JSON Files**: Navigate to the `pages/` folder and edit the JSON files to update your portfolio content.
- **Style It Your Way**: Modify `styles.css` to tweak the appearance.
- **Add Routes**: Update the `routes` object in `script.js` to add new commands/pages.

---

## 🔧 Customization Tips

### Add a New Command

1. Create a new JSON file in the `pages/` folder (e.g., `achievements.json`).

```json
{
  "content": [
    "Achievements",
    "- Built a terminal-themed portfolio",
    "- Learned JavaScript async/await",
    "- Won a hackathon!"
  ]
}
```

2. Add the route to `script.js`:

```javascript
const routes = {
        ...
        achievements: 'achievements',
}
```

3. Done! Type `achievements` in your CLI Portfolio to see the new page.

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit pull requests. Whether you're fixing bugs, adding features, or suggesting enhancements, your input is valued.
