# Minimal Resume – Express & Handlebars

A minimal resume web application built with **Express.js** and **Handlebars** as the view engine, styled with **Tailwind CSS** (CDN).

## Handlebars Features Demonstrated

| Feature            | Where Used                                                                    |
| ------------------ | ----------------------------------------------------------------------------- |
| **Render Context** | Resume data object passed from `resumeData.js` to `resume.handlebars`         |
| **Layouts**        | `views/layouts/main.handlebars` — wraps every page                            |
| **Partials**       | `header`, `section`, `experience-item`, `education-item`                      |
| **`{{#if}}`**      | Conditionally renders summary, skills, GPA, honors, website, etc.             |
| **`{{#unless}}`**  | Shows "Present" when `endDate` is `null`; shows fallback for empty references |
| **`{{#each}}`**    | Iterates over skills, experience, education, certifications, languages        |
| **Custom Helpers** | `capitalize`, `currentYear`, `eq`, `join`, `inc`                              |

## Project Structure

```
├── app.js                              # Express server + Handlebars setup + helpers
├── resumeData.js                       # Resume data (render context)
├── package.json
├── views/
│   ├── layouts/
│   │   └── main.handlebars             # Main layout (HTML skeleton + Tailwind CDN)
│   ├── partials/
│   │   ├── header.handlebars           # Contact info partial
│   │   ├── section.handlebars          # Reusable section heading partial
│   │   ├── experience-item.handlebars  # Single job entry partial
│   │   └── education-item.handlebars   # Single education entry partial
│   └── resume.handlebars               # Main resume view
└── .gitignore
```

## Getting Started

```bash
# Install dependencies
npm install

# Start the server
npm start

# Or run in development mode (auto-restart on changes)
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Technologies

- **Node.js**
- **Express.js**
- **express-handlebars**
- **Tailwind CSS** (CDN)
- **nodemon** (dev dependency)
