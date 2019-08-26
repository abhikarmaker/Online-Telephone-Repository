window.onload = function() {
  store.initializeContactData();
  store.initializeAppName();

  document.getElementById("btnSubmit").addEventListener("click", function() {
    //var userId = 1;

    var contactInputData = {
      //userId = userId + 1,
      firstName: document.getElementById("txtFirstName").value,
      lastName: document.getElementById("txtLastName").value,
      email: document.getElementById("txtEmail").value,
      mobile: document.getElementById("txtMobile").value
    };
    console.log(store.contactData);
    store.addContact(contactInputData);
    //store.loadData(store.userData);
    alert("New contact is added");
  });
};
