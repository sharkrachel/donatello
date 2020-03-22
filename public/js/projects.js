$(document).ready(function () {
  var userNameInput = $("#user-name");
  var projectNameInput = $("#project-name");
  var projectDescriptionInput = $("#project-description");
  var projectUrlInput = $("#project-url");
  var projectImageInput = $("#project-image");

  $("#new-project").on("click", handleProjectFormSubmit);

  // A function to handle what happens when the form is submitted to create new project
  function handleProjectFormSubmit() {

    //  if (!userName.val().trim().trim()) {
    //     return;
    console.log("button works");
    postProject();

  }

  function postProject() {

    $.get("/api/user/" + userNameInput.val().trim())
      .then(function (dbUserId) {
        var projectData =  {
          name: userNameInput.val().trim(),
          projectName: projectNameInput.val().trim(),
          projectDescription: projectDescriptionInput.val().trim(),
          projectLink: projectUrlInput.val().trim(),
          projectImage: projectImageInput.val().trim(), 
          UserId: dbUserId
        }
        $.post("/api/projects", projectData).then(console.log(projectData));
      })



  }
});
