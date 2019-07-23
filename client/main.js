$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $(".navbar.navbar-transparent").css("background-color" , "rgba(0,0,0,0.4)");
	  }

	  else{
		  $(".navbar.navbar-transparent").css("background-color" , "transparent");
	  }
  })
})

$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $("nav.navbar.navbar-transparent.navbar-fixed-top.contact").css("background-color" , "rgba(0,0,0,0.4)");
	  }

	  else{
		  $("nav.navbar.navbar-transparent.navbar-fixed-top.contact").css("background-color" , "transparent");
	  }
  })
})

// removed contact form js logic 7/20/2019

//Template.main.events({


// jquery contact form find data itmems

  //   'submit #contactForm': function(event){
  //   event.preventDefault();
  //   var element = $(event.target);
  //   var name = element.find("#name").val();
  //   var email = element.find("#email").val();
  //   var message = element.find("#message").val();
  //
  //   //create object to pass to serve methods
  //   var subForm = {
  //     name: name,
  //     email: email,
  //     message: message,
  //   };
  //
  //   // call meteor to send email from input
  //   Meteor.call('sendEmail', subForm);
  //   Router.go("/contact");
  // },
//});   // end of remove 7/20/2019

//// Facebook API call (added 7/20/2019 AF, JS)

Template.footer.onCreated(function () {
  this.feed = new ReactiveVar();

  var link = "https://graph.facebook.com/v2.11/boomtownm?fields=posts.limit(3)"
  var arguments = {
    headers: { "User-Agent": "Meteor/1.1" },
    params: {
      "access_token": "198250716990059|wwB7yaEBmlAfv6tskR7P8PiNVBI",
    }
  };
  Meteor.http.call('GET', link, arguments, function (error, response) {
    this.feed.set(response.data);
  }.bind(this));
});

Template.footer.helpers({
  feed1: function () {
    return Template.instance().feed.get().posts.data[0].message;
  },
  feed2: function () {
    return Template.instance().feed.get().posts.data[1].message;
  }
});
