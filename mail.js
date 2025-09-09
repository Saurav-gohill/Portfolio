function sendEmail(event) {
    if (event) event.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email1").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();
    if (!name || !email || !subject || !message) {
        alert("Contact section detail can't be empty to send message.");
        return;
    }
    let params = {
        name: name,
        email: email,
        subject: subject,
        message: message
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