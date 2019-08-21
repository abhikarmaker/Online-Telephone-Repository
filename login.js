window.onload = function() {
  store.initializeUserData();
  store.initializeAppName();
  //store.loadData(store.userData);
  document.getElementById("btnLogin").addEventListener("click", function() {
    var data = localStorage.getItem("userData");

    var username = document.getElementById("txtUsername").value;
    var password = document.getElementById("txtPassword").value;
    if (username == "admin" && password == "admin") {
      window.location.href = "Admin.html";
    } else if (store.validateUser(username, password)) {
      alert("valid ");
      window.location.href = "UserInfo.html";
    } else {
      alert("invalid ");
    }
  });
};
