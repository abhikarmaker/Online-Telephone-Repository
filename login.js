window.onload = function() {
  store.initializeUserData();
  store.initializeAppName();
  //store.loadData(store.userData);
  document.getElementById("btnLogin").addEventListener("click", function() {
    var data = JSON.parse(localStorage.getItem("userData"));
    var username = document.getElementById("txtUsername").value;
    var password = document.getElementById("txtPassword").value;
    if (username == "admin" && password == "admin") {
      window.location.href = "Admin.html";
    } else if (store.validateUser(username, password)) {
      //var id = store.userData;
      //console.log(id);
      alert(username + " Entered ");
      window.location.href = "UserInfo.html?userID=" +store.userInfoValidate(store.userData);
      //document.getElementById("UserInfo").innerHTML = "Hello" + username;
    //   for(var i = 0; i < data.length; i++){
    //     var name = data[i].username;
    //     console.log(name);
    // }
    } else {
      alert("invalid ");
    }
  });
  
  store.userData = JSON.parse(localStorage.getItem("userData"));
  
  for (var i = 0; i < store.userData.length; i++) {
    if (store.userData[i].userID){
      console.log(store.userData[i].userID);
    }
  }
};
