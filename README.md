# Developer Portfolio

A responsive personal portfolio website for presenting a developer's background, technical skills, featured projects, and contact information. It is built with plain HTML, CSS, and JavaScript, with no build step or package installation required.

## Pages

- **Home** (`index.html`) — introduction, about section, skills, featured projects, and contact details.
- **Projects** (`projects.html`) — expanded project catalog.

## Run locally

Open `index.html` in a web browser. To serve the site locally, run a static HTTP server from the project directory and open the address it provides. For example, if Python is installed:

```bash
python -m http.server 8000
```

Then visit <http://localhost:8000>.

## Project structure

```text
.
├── index.html       # Main portfolio page
├── projects.html    # Project catalog
├── style.css        # Shared layout and responsive styles
├── script.js        # Active-section navigation behavior
└── access/          # Images used by the pages
```

## Customization

Edit the page content in `index.html` and `projects.html`, and update colors, layout, or responsive styles in `style.css`. Replace the sample contact details, social links, and project links with your own. Put image assets in `access/` and update the corresponding image paths in the HTML.

Font Awesome icons are loaded from a CDN, so an internet connection is needed for those icons to display.
