
document.getElementById("change-text-btn").addEventListener("click", function() {
    document.getElementById("page-title").innerHTML = "Dynamic Content Updated!";
    document.getElementById("page-title").style.color = "blue";
    
    document.getElementById("intro-text").innerHTML = "This content has been dynamically updated with JavaScript!";
    
    document.getElementById("content").style.position = "relative";
    document.getElementById("content").style.left = "20px";
});

document.getElementById("change-image-btn").addEventListener("click", function() {
    document.getElementById("image").src = "image2.jpg";
});

document.getElementById("add-node-btn").addEventListener("click", function() {
    var newTextNode = document.createTextNode("This is a new text node added dynamically.");
    var parentElement = document.getElementById("content");
    parentElement.appendChild(newTextNode);
});

document.getElementById("delete-node-btn").addEventListener("click", function() {
    var parentElement = document.getElementById("content");
    parentElement.removeChild(parentElement.lastChild);
});

$(document).ready(function() {
    $("#change-text-btn").click(function() {
        $(this).text("Text and Color Changed!");
    });
    $("body").css("background-image", "url('background.jpg')");
    $("#submit-form-btn").click(function(event) {
        event.preventDefault(); 
        var username = $("#username").val();
        var email = $("#email").val();
        alert("Username: " + username + "\nEmail: " + email);
    });
    $("#image").attr("title", "This is an image with a dynamic title");
});
