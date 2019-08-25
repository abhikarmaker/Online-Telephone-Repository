window.onload = function() {
  store.initializeUserData();
  store.initializeAppName();
  // var username;
  // var password;
  //store.loadData(store.userData);
  document.getElementById("btnLogin").addEventListener("click", function() {
    var data = JSON.parse(localStorage.getItem("userData"));
    var username = document.getElementById("txtUsername").value;
    var password = document.getElementById("txtPassword").value;
    if (username == "admin" && password == "admin") {
      window.location.href = "Admin.html";
    } else if (store.validateUser(username, password)) {
      console.log(store.validateUser(username,password));

      alert(username + " Entered ");
      window.location.href = "UserInfo.html?userID=" +store.validateUser(username,password);
    } else {
      alert("invalid ");
    }
  });
  // console.log(store.validateUser(username,password));
  // if(store.validateUser(id.username && id.password)){
  //   console.log("hi");
  // }


};
