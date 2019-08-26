window.onload = function() {
  store.initializeUserData();
  store.initializeAppName();
  store.loadData(store.userData);

  document.getElementById("btnEdit").onclick = function() {
    window.location.href = "editinfo.html";
  };
};
