"use strict";

const browserify = require("browserify"),
    buffer       = require("vinyl-buffer"),
    gulp         = require("gulp"),
    path         = require("path"),
    source       = require("vinyl-source-stream"),
    util         = require("gulp-util"),
    watchify     = require("watchify"),
    server = require('gulp-server-livereload'),


    src = {
        js: "./src/index.js"
    },
    dest = {
        js: "./dist/"
    };

let bundler;

function bundles(profile) {
    if (bundler === undefined) {
        if (profile === "watch") {
            bundler = watchify(browserify(src.js));
        } else {
            bundler = browserify(src.js);
        }
    }

    bundle();
}

function bundle() {
    let start = new Date().getTime(),
        _ = bundler
            .bundle()
            .on("error", util.log.bind(util, "Browserify Error"))
            .pipe(source("poulpe.js"))
            .pipe(buffer())
            .pipe(gulp.dest(dest.js)),
        time = new Date().getTime() - start;

    util.log("[browserify] rebundle took ", util.colors.cyan(`${time} ms`), util.colors.grey(`(${src.js})`));

    return _;
}

gulp.task("js", bundles.bind(null));

gulp.task("watch", function () {
    bundles("watch");
    // livereload.listen({basePath: __dirname})
    serve()
    bundler.on("update", bundle.bind(null));
});


function serve(){
  gulp.src(__dirname)
    .pipe(server({
      livereload: true,
      directoryListing: true
    }));
}

gulp.task("server", function(){
    serve()
})

  gulp.task("default", ["watch", "js"]);