$(document).ready(function () {
    var nameInput = $("#user-name");
    var userList = $("tbody");
    var userContainer = $(".user-container");

    $(document).on("sumbit", "#user-form", handleUserFormSubmit);
    $(document).on("click", ".delete-user", handleDeleteButtonPress);

    getUsers();

    function handleUserFormSubmit(event) {
        if (!userNameInput.val().trim().trim()) {
            return;
        }

        upsertUser({

            username: userNameInput
                .val()
                .trim()

        });
    }

    function upsertUser(userData) {
        $.post("/api/users", userData)
            .then(getUsers);
    }

    function createUserRow(userData) {
        var newTr = $("<tr>");
        newTr.data("user", userData);
        newTr.append("<td> " + userData.name + "</td>");
        if (userData.Projects) {
            newTr.append("<td> " + userData.Projects.length + "</td>");
        }
        else {
            newTr.append("<td>0</td>");
        }
        newTr.append("<td><a href='/projects?user_id=" + userData.id + "'>Go to Projects</a></td>");
        newTr.append("<td><a style='cursor:pointer;color:red' class='delete-user'>Delete User</a></td>");
        return newTr;
    }

})