window.onload = function() {
  store.initializeUserData();
  store.initializeAppName();
  //store.loadData(store.userData);
  document.getElementById("btnSubmit").addEventListener("click", function() {
    //var userId = 1;
    
    var userInputData = {
      //userId = userId + 1,
      username: document.getElementById("txtUsername").value,
      password: document.getElementById("txtPassword").value,
      email: document.getElementById("txtEmail").value,
      mobile: document.getElementById("txtMobile").value
    };
    console.log(store.userData);
    store.addUser(userInputData);
    //store.loadData(store.userData);
    alert("New user is added");
  });
};
