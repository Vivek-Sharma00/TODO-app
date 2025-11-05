# README (Markdown)

## Todo App — Cache Storage

**What it is**
A minimal Todo web app that stores tasks using the browser's Cache Storage API. Each task is saved as a `Response` containing JSON with a custom cache key like `/tasks/<id>`.

 

## 🎯 TODO-app Link

<p align="left">
  <a href="https://todo-x-app.netlify.app/" target="_blank">
    <img src="https://img.shields.io/badge/Visit-TODO_app-%23ff6b81?style=for-the-badge" />
  </a>
</p>

 

**Files**
- `index.html` — main app (UI + logic)
- `sw.js` — optional service worker to cache the app shell

 

**Features**
- Add / toggle / delete tasks
- Filters: All / Active / Completed
- Tasks persist across reloads (same origin) using Cache Storage
- Export tasks to a JSON file

 

**How to run**
1. Put `index.html` and `sw.js` at the root of a web server.
2. Serve the site over `https` or `http://localhost` (service workers require secure contexts).
3. Open the page and interact with the app.

 

**Deploy to GitHub Pages**
1. Create a new repository and push the two files.
2. Enable GitHub Pages from the repo settings (use `main` branch root).
3. Visit `https://<your-username>.github.io/<repo>/`.

 

**Resume bullet**
```
Built a responsive Todo web app that persists tasks using the browser Cache Storage API (service worker compatible). Implemented add/toggle/delete functionality, filtering, and JSON export.
```

**Notes**
- Cache Storage is used here as requested, but it's not a general-purpose local database. For larger or structured data use IndexedDB.
- If you want, I can convert this to use IndexedDB or localStorage instead, or make a React/Vue version.

