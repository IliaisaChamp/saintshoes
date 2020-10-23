let project_folder = require('path').basename(__dirname);
let sourse_folder = "app";

let fs = require('fs');

let path = {
  build: {
    html: project_folder + "/",
    css: project_folder + "/css/",
    js: project_folder + "/js/",
    img: project_folder + "/img/",
    fonts: project_folder + "/fonts/",
  },
  src: {
    html: [sourse_folder + "/*.html", "!" + sourse_folder + "/_*.html"],
    css: sourse_folder + "/sass/style.sass",
    js: sourse_folder + "/js/script.js",
    img: sourse_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
    fonts: sourse_folder + "/fonts/*ttf",
  },
  watch: {
    html: sourse_folder + "/**/*.html",
    css: sourse_folder + "/sass/**/*.sass",
    js: sourse_folder + "/js/**/*.js",
    img: sourse_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
  },
  clean: "./" + project_folder + "/"
};




let {
  src,
  dest
} = require('gulp'),
  gulp = require('gulp'),
  browsersync = require('browser-sync').create(),
  fileinclude = require('gulp-file-include'),
  del = require('del'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  goup_media = require('gulp-group-css-media-queries'),
  clean_css = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify-es').default,
  imagemin = require('gulp-imagemin'),
  webp = require('gulp-webp'),
  webpHtml = require('gulp-webp-html'),
  webpCss = require('gulp-webpcss'),
  svgSprite = require('gulp-svg-sprite'),
  ttf2woff = require('gulp-ttf2woff'),
  ttf2woff2 = require('gulp-ttf2woff2'),
  fonter = require('gulp-fonter'),
  cache = require('gulp-cache'),
  pngquant = require('imagemin-pngquant');




function browserSync() {
  browsersync.init({
    server: {
      baseDir: "./" + project_folder + "/"
    },
    notify: false
  })
}

function html() {
  return src(path.src.html)
    .pipe(fileinclude())
    .pipe(webpHtml())
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream())
}

// ОБРАБОТКА СТИЛЕЙ

function css() {
  return src(path.src.css)
    .pipe(
      sass({
        outputStyle: 'expanded'
      })
    )
    .pipe(
      goup_media()
    )
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 5 version'],
        cascade: true
      })
    )
    .pipe(webpCss({}))
    .pipe(dest(path.build.css))
    .pipe(clean_css())
    .pipe(
      rename({
        extname: '.min.css'
      })
    )
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream())
}

// ОБРАБОТКА JS

function js() {
  return src(path.src.js)
    .pipe(fileinclude())
    .pipe(dest(path.build.js))
    .pipe(
      uglify()
    )
    .pipe(
      rename({
        extname: '.min.js'
      })
    )
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream())
}

// ОБРАБОТКА ИЗОБРАЖЕНИЙ

function images() {
  return src(path.src.img)
    .pipe(
      webp({
        quality: 70
      })
    )
    .pipe(dest(path.build.img))
    .pipe(src(path.src.img))
    .pipe(
      cache(imagemin({
        progressive: true,
        svgoPlugins: [{
          removeViewBox: false,
        }],
        interlaced: true,
        optimizationLevel: 3,
        use: [pngquant()],
      }))
    )
    .pipe(dest(path.build.img))
    .pipe(browsersync.stream())
}

// ШРИФТЫ
function fonts() {
  src(path.src.fonts)
    .pipe(ttf2woff())
    .pipe(dest(path.build.fonts))
  return src(path.src.fonts)
    .pipe(ttf2woff2())
    .pipe(dest(path.build.fonts))
};


gulp.task('otf2ttf', function () {
  return src([sourse_folder + '/fonts/*.otf'])
    .pipe(fonter({
      formats: ['ttf']
    }))
    .pipe(dest(sourse_folder + '/fonts/'))
});

// СПРАЙТЫ
gulp.task('svgSprite', function () {
  return gulp.src([sourse_folder + '/iconsprite/*.svg'])
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: "../icons/icons.svg"
        }
      },
    }))
});

// function fontsStyle(params) {

//   let file_content = fs.readFileSync(source_folder + '/sass/fonts.sass');
//   if (file_content == '') {
//     fs.writeFile(source_folder + '/sass/fonts.sass', '', cb);
//     return fs.readdir(path.build.fonts, function (err, items) {
//       if (items) {
//         let c_fontname;
//         for (var i = 0; i < items.length; i++) {
//           let fontname = items[i].split('.');
//           fontname = fontname[0];
//           if (c_fontname != fontname) {
//             fs.appendFile(source_folder + '/sass/fonts.sass', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
//           }
//           c_fontname = fontname;
//         }
//       }
//     })
//   }
// };

// function cb() {};

// ОТСЛЕЖИВАНИЕ
function watchfiles(params) {
  gulp.watch([path.watch.html], html)
  gulp.watch([path.watch.css], css)
  gulp.watch([path.watch.js], js)
  gulp.watch([path.watch.img], images)
}

function clean(params) {
  return del(path.clean)
}


let build = gulp.series(clean, gulp.parallel(js, css, html, images, fonts));
let watch = gulp.parallel(build, watchfiles, browserSync);

// exports.fontsStyle = fontsStyle;
exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;