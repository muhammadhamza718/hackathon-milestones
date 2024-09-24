// TypeScript code
var toggleButton = document.getElementById("toggle-skills");
var skillsDiv = document.getElementById("skills");
toggleButton.addEventListener("click", function () {
    if (skillsDiv.style.display === "none") {
        skillsDiv.style.display = "block";
        toggleButton.textContent = "Hide Skills";
    }
    else {
        skillsDiv.style.display = "none";
        toggleButton.textContent = "Show Skills";
    }
});
