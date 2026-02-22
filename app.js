const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.engine(
  "handlebars",
  engine({
    defaultLayout: "main",
    helpers: {
      capitalize(str) {
        if (typeof str !== "string") return "";
        return str.charAt(0).toUpperCase() + str.slice(1);
      },

      currentYear() {
        return new Date().getFullYear();
      },

      eq(a, b) {
        return a === b;
      },

      join(arr, separator) {
        if (!Array.isArray(arr)) return "";
        return arr.join(separator);
      },

      inc(value) {
        return parseInt(value) + 1;
      },
    },
  }),
);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

const resumeData = require("./resumeData");

app.get("/", (req, res) => {
  res.render("resume", resumeData);
});

app.listen(PORT, () => {
  console.log(`Resume app running at http://localhost:${PORT}`);
});
