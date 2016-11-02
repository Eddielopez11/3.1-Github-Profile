
document.addEventListener("DOMContentLoaded", function(){
// 3.1 Github Profile main js .
  var requestProfile = new XMLHttpRequest();
  var requestRepo = new XMLHttpRequest();

  var gitName = document.querySelector(".name");
  var blog = document.querySelector(".blog");
  var location = document.querySelector(".location");
  var email = document.querySelector(".email");
  var avatarURL = document.querySelector(".avatarURL");
  var htmlURL = document.querySelector(".htmlURL");
  var userRepos = document.querySelector(".repos");

  requestProfile.addEventListener('load', function(e){
    var requestJSON = JSON.parse(e.target.response);
    gitName.textContent = requestJSON.name;
    blog.textContent = requestJSON.blog;
    location.textContent = requestJSON.location;
    email.textContent = requestJSON.email;
    avatarURL.src = requestJSON.avatar_url;
    htmlURL.textContent = requestJSON.url;
    // console.log(requestJSON.name);
  });

  requestRepo.addEventListener('load', function(e){
    var requestJSON = JSON.parse(e.target.response);
    var listRepos = "";
    requestJSON.forEach(function(r){
      listRepos += "<li>";
      listRepos += "<h5> " + r.name + "</h5>"
      listRepos += "</li>"
    });
    userRepos.innerHTML = listRepos;
  });

  requestProfile.open("GET", "https://api.github.com/users/Eddielopez11");
  requestProfile.send(null);
  requestRepo.open("GET", "https://api.github.com/users/Eddielopez11/repos");
  requestRepo.send(null);
});
