var gulp = require ('gulp'),
watch = require ('gulp-watch')

gulp.task('default', function(){
    console.log("hello");
});

gulp.task('html', function(){
    console.log("jii woww");
});
gulp.task('styles', function(){
    console.log("css works");
});

gulp.task('watch', function(){
    watch('./app/index.html',function(){
        gulp.start('html');
    });
    watch('./app/assets/styles/stylesheet.css',function(){
        gulp.start('styles');
    });
});
