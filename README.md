# CSV Table Editor

Flow:

1. User uploads a file to your app.
2. App validates file’s structure and possibly checks other reasonable limitations (such as file size):
    - If validation fails error should be shown and way to reupload the file.
    - If validation succeeds table and aggregations are shown side by side.
3. User edits data in the table, aggregations should be automatically updated. Both table headings and actual data must be editable, field types must be preserved.

### Development mode

```
npm install
npx shadow-cljs watch app
```

start a ClojureScript REPL

```
npx shadow-cljs browser-repl
```

### Building for production

```
npx shadow-cljs release app
```
