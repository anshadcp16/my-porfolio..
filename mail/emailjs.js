function sendMail(){
    var params={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message").value,
        
    };
    
    emailjs.send("service_kts835i","template_gs6qmbe",params).
    then(function(res){
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("your message sent successfully");
    }) 
    .catch((err) => console.log(err));

    }

