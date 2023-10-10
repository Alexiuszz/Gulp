const { series, dest } = require("gulp");
const { EventEmitter } = require("events");

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
exports.build = series(t);
