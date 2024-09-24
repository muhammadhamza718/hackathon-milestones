const toggleButton = document.getElementById(
  "toggle-skills"
) as HTMLButtonElement;
const skillsDiv = document.getElementById("skills") as HTMLDivElement;

toggleButton.addEventListener("click", () => {
  if (skillsDiv.style.display === "none") {
    skillsDiv.style.display = "block";
    toggleButton.textContent = "Hide Skills";
  } else {
    skillsDiv.style.display = "none";
    toggleButton.textContent = "Show Skills";
  }
});
