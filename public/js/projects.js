$(document).ready(function() {
  var userNameInput = $("#user-name");
  var projectNameInput = $("#project-name");
  var projectDescriptionInput = $("#project-description");
  var projectUrlInput = $("#project-url");
  var projectImageInput = $("#project-image");
  var newUserInput = $("#user-sign-up");
  var projects;
  $("#new-project").on("click", handleProjectFormSubmit);

  // A function to handle what happens when the form is submitted to create new project
  function handleProjectFormSubmit(event) {
    event.preventDefault();
    postProject();
  }

  function postProject() {
    $.get("/api/user/" + userNameInput.val().trim()).then(function(dbUserId) {
      var projectData = {
        name: userNameInput.val().trim(),
        projectName: projectNameInput.val().trim(),
        projectDescription: projectDescriptionInput.val().trim(),
        projectLink: projectUrlInput.val().trim(),
        projectImage: projectImageInput.val().trim(),
        UserId: dbUserId
      };
      if (
        !projectData.name ||
        !projectData.projectDescription ||
        !projectData.projectDescription ||
        !projectData.projectLink ||
        !projectData.projectImage
      ) {
        alert("Please fill out empty forms");
      } else {
        $.post("/api/projects", projectData).then(getProjects);
      }
    });
  }

  // Onclick function for new user submission
  $("#new-user").on("click", handleUserFormSubmit);

  // function to call postUser function
  function handleUserFormSubmit(event) {
    event.preventDefault();
    postUser({
      name: newUserInput.val().trim()
    });
  }

  // A function to handle what happens when the form is submitted to create new user
  function postUser(newUserData) {
    $.post("/api/user", newUserData);
  }

  function getProjects() {
    $.get("/api/projects", function(data) {
      // console.log("Projects", data);
      projects = data;
      displayProj(projects);
    });
  }

  getProjects();

  // function to display results from API to html after response
  function displayProj(projects) {
    // set variable to shorten result string
    var result = projects;

    $("#result-table").empty();
    // loop through results
    for (var i = 0; i < result.length; i++) {
      // set variables to results and append them to html
      var resultDiv = $("<div>");
      var projectCard = result[i].projectName;
      resultDiv.append(projectCard);
      resultDiv.addClass("col-sm-3");
      resultDiv.addClass("res-card");
      $("#result-table").append(resultDiv);
    }
  }
});
