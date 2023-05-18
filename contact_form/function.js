// This function will be called when the submit button is clicked
function submitForm() {
    // Get the values from the form
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
  
    // Create a new form data object
    var formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("message", message);
  
    // Send the form data to the server
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "contact.php");
    xhr.onload = function() {
      if (xhr.status === 200) {
        // The form was submitted successfully
        alert("Your message has been sent!");
      } else {
        // There was an error submitting the form
        alert("An error occurred. Please try again later.");
      }
    };
    xhr.send(formData);
  }
  