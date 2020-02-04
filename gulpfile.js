var gulp = require ('gulp'),
watch = require ('gulp-watch')

gulp.task('default', function(){
    console.log("hello");
});

gulp.task('woww', function(){
    console.log("jii woww");
});

gulp.task('watch', function(){
    watch('./app/index.html',function(){
        gulp.start('html');
    });
});