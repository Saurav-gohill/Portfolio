function sendEmail(event) {
    if (event) event.preventDefault();
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email1").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };
    emailjs.send("service_7y1kqq9", "template_oxvtr4h", params)
        .then(function(response) {
         
            alert("Message sent successfully!");
        })
        .catch(function(error) {
            console.error("Error sending email:", error);
            alert("Failed to send message. Please try again later.");
        });
}