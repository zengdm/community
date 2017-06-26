

//发帖-动态
//require('./css/post/post_dynamic.css');
//require('./css/post/post_question.css');
//require('./css/post/post_text.css');

//个人中心
require('./css/personal/personal.css');

  // 模块
var Footer = require('./components/footer/Footer');
var footer = new Footer();

// 自由逻辑
var PostDynamic = require('./js/post/PostDynamic');
var postDynamic = new PostDynamic();