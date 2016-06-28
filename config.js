// 参考
var cmnDir    = "public_html/";
var phpCmnDir = "src/";

module.exports = {
  // sass
  sass: [
    {
      src: cmnDir + 'scss/',
      dst: cmnDir + 'css/'
    }
  ],

  csfixer: {
    bin: './bin/php-cs-fixer'
  },
  notify: {
    msg: {
      message: 'Gulp Start',
      sound:   'Submarine'
    },
    errormsg: {
      message: 'Error: <%= error.message %>',
      title:   'Error running something',
      sound:   'Glass'
    }
  },

  // watch
  watch: {
    target: [
      phpCmnDir + "**/*.php"
    ]
  }
}
