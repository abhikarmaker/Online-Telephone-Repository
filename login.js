window.onload = function() {
  store.initializeUserData();
  store.initializeAppName();
  document.getElementById("btnLogin").addEventListener("click", function() {
    var data = JSON.parse(localStorage.getItem("userData"));
    var username = document.getElementById("txtUsername").value;
    var password = document.getElementById("txtPassword").value;
    if (username == "admin" && password == "admin") {
      window.location.href = "Admin.html";
    } else if (store.validateUser(username, password)) {
      console.log(store.validateUser(username, password));
      sessionStorage.setItem(
        "loggedUserId",
        store.validateUser(username, password)
      );
      window.location.href = "UserInfo.html";
    } else {
      alert("invalid ");
    }
  });
};
