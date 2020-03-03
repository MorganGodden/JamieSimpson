function validate() {
    name = document.getElementById("name");  // Gets name.
    msg = document.getElementById("msg"); // Gets message.
    email = document.getElementById("email"); // Gets e-Mail.
    
    name.content = name.content.replace(/[0-9]/g, ''); // Removes numbers in name.
    msg.content = msg.content.substring(0, 1000); // Limits message length.
    email.content = email.content.replace(' ', ''); // Removes spaces in e-Mail.
}