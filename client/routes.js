Router.route('/', function() {
  this.render('main');
});

Router.route('/blog', function(){
  this.render('blog');
});
