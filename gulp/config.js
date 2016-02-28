var dest = 'build';
var src = 'src';

module.exports = {
  browserSync: {
    server: "./build"
  },
  sass: {
    src: [src + "/sass/**/*.{sass,scss}"],
    dest: dest,
    settings: {
      indentedSyntax: true, // Enable .sass syntax!
      imagePath: '/images', // Used by the image-url helper
      includePaths: ['node_modules/modularscale-sass/stylesheets', 'node_modules/standard/src/sass']
    }
  },
  images: {
    src: src + "/images/**",
    dest: dest + "/images"
  },
  public: {
    src: src + "/public/**",
    dest: dest
  },
  markup: {
    src: src + "/htdocs/*.jade",
    dest: dest
  },
  browserify: {
    bundleConfigs: [{
      entries: "./" + src + '/javascript/app.coffee',
      dest: dest,
      outputName: 'app.js',
      extensions: ['.coffee', '.jade'],
      paths: ['./src/javascript/']
    },
    {
      entries: "./" + src + '/javascript/global.coffee',
      dest: dest,
      outputName: 'global.js',
      extensions: ['.coffee', '.jade']
    }]
  },
  production: {
    cssSrc: dest + '/*.css',
    jsSrc: dest + '/*.js',
    dest: dest
  }
};