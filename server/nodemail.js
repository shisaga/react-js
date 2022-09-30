var nodemail= require('nodemailer');

  var transporter = nodemail.createTransport({
    service:'gmail',
    auth:{
        user :'bookadda.dev1@gmail.com',
        pass:'imcrsgojayvwqptm'
    }

  });

  var mailOption={
    from:'bookadda.dev1@gmail.com',
    to :'15277shivsagar@gmail.com',
    subject: 'sending Email using Nodeljs',
    text:' hello bhai  ke hall h'
  }

  transporter.sendMail(mailOption,(error,info)=>{
    if(error){
        console.log(error)

    }
    else{
        console.log('Email sent ' + info.response);

    }
  });