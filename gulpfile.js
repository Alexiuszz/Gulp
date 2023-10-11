const { series, dest } = require("gulp");
const { EventEmitter } = require("events");
const { Observable } = require("rxjs");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const gulpif = require('gulp-if');

function transpile(cb) {
  cb;
}

function bundle(cb) {
  cb;
}

// returning a Stream

function StreamTask() {
  return src("*js").pipe(dest("output"));
}

//  returning a promise

function promiseTask() {
  return promise.resolve(" value");
}

//return an Event
function eventTask() {
  const emitter = new EventEmitter();
  // Emit has to happen async otherwise gulp isn't listening yet
  setTimeout(() => {
    emitter.emit("finished");
  }, 250);
  return emitter;
}

//return a child process
const { exec } = require("child_process");

function childProcessTask() {
  return exec("date");
}

// Returning an observable

function observableTask() {
  return Observable.of(1, 2, 3);
}

// async await task
async function asyncAwaitTask() {
  const { version } = JSON.parse(
    fs.readFileSync("package.json", "utf8")
  );
  console.log(version);
  await Promise.resolve("some result");
}

function MultipleEntry() {
  return src("src/*.js")
    .pipe(babel())
    .pipe(src("vendor/*.js"))
    .pipe(uglify())
    .pipe(dest("output/"));
};

const { src, dest } = require('gulp');
const gulpif = require('gulp-if');
const uglify = require('gulp-uglify');

function isJavaScript(file) {
  // Check if file extension is '.js'
  return file.extname === '.js';
}

// Gulp if plugin
function GulpifPlugin() {
  // Include JavaScript and CSS files in a single pipeline
  return src(['src/*.js', 'src/*.css'])
    // Only apply gulp-uglify plugin to JavaScript files
    .pipe(gulpif(isJavaScript, uglify()))
    .pipe(dest('output/'));
}
