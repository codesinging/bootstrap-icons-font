const {series, parallel, src, dest, watch} = require('gulp')
const rename = require('gulp-rename')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const replace = require('gulp-replace')
const sourcemaps = require('gulp-sourcemaps')
const minifyCss = require('gulp-clean-css')
const autoPrefixer = require('gulp-autoprefixer')
const del = require('del')
const fs = require('fs')
const {version, srcVersion, title, description, author, homepage} = require('./package.json')

const css = () => {
    return src('src/sass/main.scss')
        .pipe(concat('bootstrap-icons-font.css'))
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(replace('{$version}', version))
        .pipe(replace('{$srcVersion}', srcVersion))
        .pipe(replace('{$libName}', title))
        .pipe(replace('{$description}', description))
        .pipe(replace('{$author}', author.name))
        .pipe(replace('{$homepage}', homepage))
        .pipe(autoPrefixer())
        .pipe(dest('dist'))
        .pipe(sourcemaps.init())
        .pipe(minifyCss())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('./'))
        .pipe(dest('dist'))
}

const font = () => {
    return src('vendor/fonts/*.*')
        .pipe(dest('dist/fonts'))
}

const data = () => {
    return src('src/icons.js')
        .pipe(dest('dist'))
}

const cleanCss = () => {
    return del(['dist/*.css', 'dist/*.css.map'])
}

const cleanFonts = () => {
    return del(['dist/fonts'])
}

const dev = () => {
    watch('src/sass/*.scss', {ignoreInitial: false}, series(cleanCss, css))
    watch('vendor/fonts/*.*', {ignoreInitial: false}, series(cleanFonts, font))
}

const names = (content) => {
    return content.match(/\.(bi-[a-z0-9-]+):/ig);
}

const parse = (cb) => {
    let content = fs.readFileSync('vendor/style.css', 'utf8')
    const arr = names(content)
    arr.forEach((item, index) => {
        arr[index] = item.substr(1, item.length - 2)
    })
    let icons = JSON.stringify(arr)
    icons = 'export default ' + icons
    fs.writeFileSync('src/icons.js', icons)
    cb()
}

exports.css = css
exports.parse = parse
exports.dev = dev
exports.build = parallel(series(cleanCss, css), series(cleanFonts, font), data)
