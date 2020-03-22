$(document).ready(function() {
  var userNameInput = $("#user-name");
  var projectNameInput = $("#project-name");
  var projectDescriptionInput = $("#project-description");
  var projectUrlInput = $("#project-url");
  var projectImageInput = $("#project-image");

  $(document).on("click", "#new-project", handleProjectFormSubmit);

  // A function to handle what happens when the form is submitted to create new project
  function handleProjectFormSubmit(event) {
    event.preventDefault();
    //  if (!userName.val().trim().trim()) {
    //     return;

    postProject({
      name: userNameInput.val().trim(),
      projectName: projectNameInput.val().trim(),
      projectDescription: projectDescriptionInput.val().trim(),
      projectLink: projectUrlInput.val().trim(),
      projectImage: projectImageInput.val().trim()
    });
  }

  function postProject(projectData) {
      console.log(projectData)
    $.post("/api/projects", projectData).then(console.log(projectData));
  }
});
