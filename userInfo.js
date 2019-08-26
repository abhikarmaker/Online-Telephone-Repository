var n = sessionStorage.getItem("loggedUserId");
window.onload = function() {
  store.initializeUserData();
  store.initializeAppName();
  //-------------Getting Value of user from url-----------------------

  console.log(n);
  var loggedUser = store.getUserByUserId(n);
  //-------------Displaying user data in browser-------------------
  document.getElementById("UserInfo").innerHTML =
    "Hello  " + loggedUser.username;
  document.getElementById("userName").innerHTML = loggedUser.username;

  //---------------Contact Data----------------------
  store.initializeContactData();
  store.initializeAppName();

  loadResult();
  document.getElementById("btnSubmit").addEventListener("click", function() {
    //var userId = 1;
    //console.log(getUrlVars()["userID"]);
    var contactInputData = {
      firstName: document.getElementById("txtFirstName").value,
      lastName: document.getElementById("txtLastName").value,
      email: document.getElementById("txtEmail").value,
      mobile: document.getElementById("txtMobile").value,
      userID: store.userData[n - 1].userID
    };
    console.log(store.contactData);
    store.addContact(contactInputData);
    //store.loadData(store.userData);
    alert("New contact is added");
    //store.loadContactData();
    loadResult();
  });

  document
    .getElementById("lnkLogout")
    .addEventListener("click", function(event) {
      event.preventDefault();
      sessionStorage.clear();
      window.location.href = "login.html";
    });
};

function loadResult() {
  var result = [];
  for (var idx = 0; idx <= store.contactData.length - 1; idx++) {
    //console.log(store.contactData[idx].username);
    if (store.contactData[idx].userID == n) {
      result.push(store.contactData[idx]);
      console.log(store.contactData[idx]);
      //store.loadContactData(store.contactData);
      //store.loadContactData(store.contactData[idx]);
    }
  }
  store.loadContactData(result);
}
