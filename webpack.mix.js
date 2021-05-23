// webpack.mix.js

let mix = require('laravel-mix');

mix.sass('src/sass/app.scss', 'src/build/css');
mix.js('src/js/app.js', 'src/build/js')