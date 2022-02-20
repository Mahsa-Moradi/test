const gulp= require('gulp');
const imagemin= require('gulp-imagemin');
// gulp.task - Define tasks /(moshakhas kardan yek vazifeh)/
// gulp.src - Point to files to use
// gulp.dest (dist folder)- -Points to folder to output
// gulp.watch  -Watch file and folders for changes   /(file haye Src  ke hey taghir mikoneh ro NAGAH mikoneh)/
// print Msg
// ***********************
gulp.task('msg',async function(){
return console.log('This is my first task');
});
gulp.task('copyhtml',async function(){
    gulp.src('src/*.html');
    pipe(gulp.dest('dist'));
    });
// image minify*************
gulp.task('minify-image',async function(){
    gulp.src('src/assets/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))

});
// ............
gulp.task('minify-image',async function(){
    gulp.src('src/assets/img/*')
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.mozjpeg({quality: 75, progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ]))
    .pipe(gulp.dest('dist/images'))

});

//  ........
export default () => (
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/assets/img'))
);