window.onload = function() {
  store.initializeUserData();
  store.initializeAppName();
  function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(
      /[?&]+([^=&]+)=([^&]*)/gi,
      function(m, key, value) {
        vars[key] = value;
      }
    );
    return vars;
  }

  var n = getUrlVars()["userID"];
  console.log(n);
  console.log(store.userData[n-1]);
  document.getElementById("UserInfo").innerHTML =
    "Hello " + store.userData[n-1].username;
  document.getElementById("userName").innerHTML = store.userData[n-1].username;
  store.initializeContactData();
  store.loadContactData(store.contactData);
};
