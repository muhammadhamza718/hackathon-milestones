// Get references to the form and display area
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById(
  "resume-display"
) as HTMLDivElement;

// Handle form submission
form.addEventListener("submit", (event: Event) => {
  event.preventDefault(); // Prevent page reload

  // Collect input values
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const education = (
    document.getElementById("education") as HTMLTextAreaElement
  ).value;
  const experience = (
    document.getElementById("experience") as HTMLTextAreaElement
  ).value;
  const skills = (document.getElementById("skills") as HTMLTextAreaElement)
    .value;

  // Generate the resume content dynamically
  const resumeContent = `
  <h2>Editable Resume</h2>
  <h3>Personal Details</h3>
  <p><strong>Name:</strong><span contenteditable="true">${name}</span></p>
  <p><strong>Email:</strong><span contenteditable="true">${email}</span></p>
  <p><strong>Phone:</strong><span contenteditable="true">${phone}</span></p>

  <h3>Education</h3>
  <p contenteditable="true">${education}</p>

  <h3>Experience</h3>
  <p contenteditable="true">${experience}</p>

  <h3>Skills</h3>
  <p contenteditable="true">${skills}</p>
  `;

  // Display the resume content
  if (resumeDisplayElement) {
    resumeDisplayElement.innerHTML = resumeContent;
  } else {
    console.error("The resume display element could not be found.");
  }
});
