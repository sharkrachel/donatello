$(document).ready(function () {

  function displayUserProjects() {

    var username = $("#github-user").val().trim()
    window.location.href = "/api/user/" + username

  }

  $("#user-form-input").on("click", displayUserProjects)


});







// var url = window.location.search;
// var userId;

// $("#user-form-input").on("click", getProjects);

// if (url.indexOf("?UserId=") !== -1) {
//     userId = url.split("=")[1];
//     getProjects(userId);
// }
// else {
//     alert("no projects");
// }

//   });

// function getProjects(user) {
//     userId = user || "";
//     if (userId) {
//         userId = "/?UserId=" + userId;
//     }

//     $.get("/api/projects" + userId, function(data) {
//         console.log("Projects", data);
//         projects = data;
//         if (!projects || !projects.lengths) {
//             displayEmpty(user);
//         }
//         else {
//             displayProjects();
//         }
//     })

//     function displayEmpty(id) {
//         var query = window.location.search;
//         var partial = "";
//         if (id) {
//             partial = " for User#" + id;
//         }
//         projectContainer.empty();
//         var messageH2 = $("<p>");
//         messageH2.html("No projects yet" + partial);
//         projectContainer.append(messageH2);
//     }

//     function displayProjects(projects) {


//         $("#result-table").empty();
        // loop through results
        // for (var i = 0; i < result.length; i++) {
          // set variables to results and append them to html
        //   var project = $("<div>");
        //   var photo = $("<img>")
        //   var projectCard;
          // var image = result[i].projectImage;

    //       photo.attr("src", result[i].projectImage);
    //       photo.addClass("project-photo");

    //       project.attr("data-id-1", result[i].projectName);
    //       project.attr("data-id-2", result[i].projectDescription);
    //       project.attr("data-id-3", result[i].projectLink);
    //       project.addClass("res-card");
    //       project.addClass("col-sm-3");
    //       project.append(projectCard);
    //       project.prepend(photo);
    //       $("#result-table").prepend(project);
    //     }
    // }