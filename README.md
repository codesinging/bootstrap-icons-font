# Bootstrap Icons Font

An icon font library based on [Bootstrap Icons](https://icons.getbootstrap.com/)

## Install

### Install Bootstrap Icons Font with npm:

    npm install bootstrap-icons-font
    
### Install Bootstrap Icons Font with yarn:

    yarn add bootstrap-icons-font
   
## Usage

### Basic Icons

The Bootstrap Icons Font is designed to be used with inline elements, `i` and `span` are recommended.

    <i class="bi-gear"></i>
    <span class="bi-gear-fill"></span>

### Icon Sizes

You can set the font sizes with `font-size` like common elements

    <i class="bi-gear" style="font-size: 32px;"></i>
    
You can also use the utilities:

- `.bi--lg` : font size is 1.33333333em
- `.bi--2x` : font size is 2em
- `.bi--3x` : font size is 3em
- `.bi--4x` : font size is 4em
- `.bi--5x` : font size is 5em

Examples:

    <i class="bi-gear-fill bi--lg"></i>
    <i class="bi-gear-fill bi--2x"></i>

### Animated Icons

You can use the `bi--spin` class to get any icon to rotate.

    <i class="bi-gear bi--spin"></i>
    
### Rotated & Flipped

You can rotate and flip icons use the `bi--rotate-*` and `bi--flip-*` classes.

    <i class="bi-bootstrap bi--rotate-45"></i>
    <i class="bi-bootstrap bi--rotate-90"></i>
    <i class="bi-bootstrap bi--rotate-135"></i>
    <i class="bi-bootstrap bi--rotate-180"></i>
    <i class="bi-bootstrap bi--rotate-225"></i>
    <i class="bi-bootstrap bi--rotate-270"></i>
    <i class="bi-bootstrap bi--rotate-315"></i>
    
    <i class="bi-bootstrap bi--flip-horizontal"></i>
    <i class="bi-bootstrap bi--flip-vertical"></i>

## License

MIT
