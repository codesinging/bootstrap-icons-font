const {series, parallel, src, dest, watch} = require('gulp')
const rename = require('gulp-rename')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const sourcemaps = require('gulp-sourcemaps')
const minifyCss = require('gulp-clean-css')
const autoPrefixer = require('gulp-autoprefixer')
const browserSync = require('browser-sync').create()
const del = require('del')
const fs = require('fs')

const srcFilename = 'src/main.scss'
const watchSrcFiles = 'src/*.scss'
const destFilename = 'bootstrap-icons-font.css'
const destFolder = 'dist'
const fontsSrc = 'src/vendor/fonts/*.*'
const fontsDest = 'dist/fonts'

const parseSrcFile = 'src/vendor/style.css'
const parseIconsFile = 'demo/icons.js'

const css = () => {
    return src(srcFilename)
        .pipe(concat(destFilename))
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(autoPrefixer())
        .pipe(dest(destFolder))
        .pipe(sourcemaps.init())
        .pipe(minifyCss())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('./'))
        .pipe(dest(destFolder))
}

const fonts = () => {
    return src(fontsSrc)
        .pipe(dest(fontsDest))
}

const cleanCss = () => {
    return del(['dist/*.css', 'dist/*.css.map'])
}
const cleanFonts = () => {
    return del(['dist/fonts'])
}

const clean = () => {
    return del('dist')
}

const watches = () => {
    watch(watchSrcFiles, {ignoreInitial: false}, series(cleanCss, css))
    watch(fontsSrc, {ignoreInitial: false}, series(cleanFonts, fonts))
}

const serve = () => {
    browserSync.init({
        server: {
            baseDir: './',
            index: 'demo/index.html'
        },
        files: [
            './demo/*.*',
            './dist/**/*.*'
        ]
    })
}

const getNames = (content) => {
    return content.match(/\.(bi-[a-z0-9-]+):/ig);
}

const parse = () => {
    let content = fs.readFileSync(parseSrcFile,'utf8')
    const arr = getNames(content)
    arr.forEach((item,index)=>{
        arr[index] = item.substr(1, item.length-2)
    })
    let icons = JSON.stringify(arr)
    icons = 'let icons = ' + icons
    fs.writeFile(parseIconsFile, icons, err => {
        console.log('parse file success')
    })
}

exports.clean = clean
exports.parse = parse
exports.serve = serve
exports.dev = parallel(watches, serve)
exports.build = parallel(series(cleanCss, css), series(cleanFonts, fonts))
