// Get references to the form and display area
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
// Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload
    // Collect input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills")
        .value;
    // Generate the resume content dynamically
    var resumeContent = "\n  <h2>My Resume</h2>\n  <h3>Personal Details</h3>\n  <p><strong>Name:</strong> ".concat(name, "</p>\n  <p><strong>Email:</strong> ").concat(email, "</p>\n  <p><strong>Phone:</strong> ").concat(phone, "</p>\n\n  <h3>Education</h3>\n  <p>").concat(education, "</p>\n\n  <h3>Experience</h3>\n  <p>").concat(experience, "</p>\n\n  <h3>Skills</h3>\n  <p>").concat(skills, "</p>\n  ");
    // Display the resume content
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeContent;
    }
    else {
        console.error("The resume display element could not be found.");
    }
});
