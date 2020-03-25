$(document).ready(function () {
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
    $.get("/api/user/" + userNameInput.val().trim()).then(function (dbUserId) {
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

  // function to get projects from database and then call function to display them to page
  function getProjects() {
    $.get("/api/projects", function (data) {
      projects = data;
      displayProj(projects);
    });
  }

  // call get projects function
  getProjects();

  // function to display results from API to html after response
  function displayProj(projects) {
    // set variable to shorten result string
    var result = projects;

    $("#result-table").empty();
    // loop through results
    for (var i = 0; i < result.length; i++) {
      // set variables to results and append them to html
      var project = $("<div>");
      var projectCard = result[i].projectName;
      project.attr("data-id-1", result[i].projectName);
      project.attr("data-id-2", result[i].projectDescription);
      project.attr("data-id-3", result[i].projectLink);
      project.addClass("res-card");
      project.addClass("col-sm-3");
      project.append(projectCard);
      $("#result-table").append(project);
    }
  }

  // function to open modal when project cards are clicked
  function displayModal() {
    // toggle modal to open
    $("#project-modal").modal("toggle");
  }

  // document on click function to get card data attributes, send them to modal and call modal function
  $(document).on("click", ".res-card", function () {
    // assign variables to data attributes
    var name = $(this).data("id-1");
    var description = $(this).data("id-2");
    var link = $(this).data("id-3");

    // send project information to modal
    $("#match-project-name").html("Project Name: " + "<br>" + name);
    $("#match-description").html(
      "Project Description: " + "<br>" + description
    );
    $("#match-link").html("Project Link: " + "<br>" + link);

    // testing and debugging
    console.log(name);
    console.log(description);
    console.log(link);

    // call display modal function
    displayModal();
  });
});
//sticky for navbar
// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();

  // Get the navbar
  var navbar = document.getElementsByClassName("Navbar");

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }
}