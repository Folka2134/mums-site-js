function SendMail() {
  let params = {
    from_fname: document.getElementById("firstName").value,
    from_lname: document.getElementById("lastName").value,
    email_id: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_4aukl6p", "template_3e5af5d", params)
    .then(function (res) {
      alert("Success! " + res.status);
    });
}
