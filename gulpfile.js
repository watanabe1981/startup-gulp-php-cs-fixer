var gulp        = require("gulp");
var loadPlugins = require('gulp-load-plugins');
var $           = loadPlugins();
var config      = require("./config");
var glob        = require("glob");
var source      = require('vinyl-source-stream');
var exec        = require('child_process').exec;
require('es6-promise').polyfill();

// Plugin to function
function cached(task){ return $.cached(task);}
function using(){ return $.using();}
function notify(){ return $.plumber({errorHandler: $.notify.onError(config.notify.errormsg)}); }

// Sass 設定
function sassWatch(src, dst) {
  gulp.src(src + '*.scss')
    .pipe(sass({
      outputStyle: 'expanded',
      indentWidth: 4
    }).on('error', notify()))
    .pipe($.autoprefixer({
      autoprefixer: { browsers: config.prefixBrowsers}
    }))
    .pipe(gulp.dest(dst))
    .pipe(browserSync.stream());
}

// Sass
gulp.task('sass', function(){
    for (var i =0; config.sass.length > i; i++) {
      sassWatch(config.sass[i].src, config.sass[i].dst);
    }
});

// Directory watch
gulp.task('watch', function () {
    gulp.watch(config.watch.target).on('change', function(event) {
		console.log(config.csfixer.bin);
        var command = config.csfixer.bin + " fix " + event.path + " --config-file=" + __dirname + "/.php_cs"
        //var command = "./bin/php-cs-fixer fix " + event.path + " --config-file=" + __dirname + "/.php_cs --dry-run --verbose --diff"
        exec(command);
        console.log("execute command: " + command);
    })
});


// gulpfile watch
var spawn = require('child_process').spawn;
    gulp.task('default', function() {
        var process;
        function restart() {
            if (process) {
              process.kill();
            }
            process = spawn('gulp', ['default-task'], {stdio: 'inherit'});
        }
    gulp.watch('gulpfile.js', restart);
    restart();
});

var builtin = require('child_process').exec;
gulp.task('builtin-sv', function (cb) {
  builtin('php -S ' + vhostBuitin + ' -t ' + rootDir, function (err, stdout, stderr) {
    cb(err);
  });
})

// start
gulp.task('gulp-start', function (){
});

// default task
gulp.task("default-task", [
    "gulp-start",
    "watch"
]);

// vagrant task
gulp.task("live", [
    "gulp-start",
    "watch"
]);

// vagrant task
gulp.task("builtin", [
    "builtin-sv",
    "gulp-start",
    "watch"
]);
