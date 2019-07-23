import { Meteor } from 'meteor/meteor';
Meteor.startup(() => {

  // code to run on server at startup
  smtp = {
    username: 'boomtownm@gmail.com',
    password: 'yr4boomtown',
    server: 'smtp.gmail.com',
    port: 587
}
  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;

});

if(Meteor.isServer) {
  Meteor.methods({
    sendEmail(subForm){
    //let other method calls from the same client start running

    Email.send({
      to: "boomtownm@gmail.com",
      name: subForm.name,
      from: subForm.email,
      subject:subForm.name + " has contacted you",
      message:subForm.message,
      text: "name: " + subForm.name + '\n' +
            subForm.message,

    });
    }
  });
};
