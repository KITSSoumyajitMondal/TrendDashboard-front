var gulp = require("gulp");

// html
gulp.task("pages", require("./tasks/pages"));
gulp.task("partials", require("./tasks/partials"));

// static files
gulp.task("public", require("./tasks/public"));
gulp.task("languages", require("./tasks/languages"));

// generated assets
gulp.task("scripts", require("./tasks/scripts"));
gulp.task("icons", require("./tasks/icons"));
gulp.task("sprite", require("./tasks/sprite"));
gulp.task("stylesheets", ["icons", "sprite"], require("./tasks/stylesheets"));

// build
gulp.task("dist", [
  "pages",
  "partials",
  "public",
  "languages",
  "stylesheets",
  "scripts"
]);

// dev tasks
gulp.task("server", ["dist"], require("./tasks/server").start);
gulp.task("watch", ["dist"], require("./tasks/watch"));
gulp.task("default", [
  "dist",
  "server",
  "watch"
]);
