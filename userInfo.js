window.onload = function(){
    store.initializeUserData();
    store.initializeAppName();
    function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        return vars;
    }

    var n = getUrlVars()["username"];
    document.getElementById("userName").innerHTML = n;

}