var gulp = require( "gulp" ),
    webserver = require( "gulp-webserver" ),
    spawn = require( "child_process" ).spawn;

gulp.task( "webserver", function() {
  gulp.src( "./" )
  .pipe( webserver( {
    host: "0.0.0.0",
    port: 8080
  } ) );
} );

gulp.task( "default", [ "webserver", "watch" ] );

gulp.task( "watch", function() {
  gulp.watch( "./build/**/*.js", [ "build" ] );
} );

gulp.task( "build", function( done ) {
  var p = spawn( "npm", [ "run", "build" ], { stdio: "inherit" } );
  p.on( "close", function() {
    done();
  } );
} );
