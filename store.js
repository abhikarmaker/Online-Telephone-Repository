// //Need to change the employee to user for registration and contacts
// //------------------STORE OBJECT-------------------------
// var store = {
//   appName: "Employee Management",
//   appVersion: "1.0",
//   isAddorEdit: false,
//   employeeData: [
//     {
//       employeeId: 101,
//       employeeName: "abhi",
//       jobTitle: "Developer",
//       salary: 1000
//     },
//     {
//       employeeId: 102,
//       employeeName: "abhijeet",
//       jobTitle: "Developer1",
//       salary: 2000
//     }
//   ],
//   addEmployee: function(employee) {
//     this.employeeData.push(employee);
//     localStorage.setItem('employeeData',JSON.stringify(store.employeeData));
//   },
//   //   updateEmployee:function(employee){
//   //       this.data.
//   //   }
//   deleteEmployee: function(id) {
//     for (var index = 0; index < this.employeeData.length; index++) {
//       if (this.employeeData[index].employeeId == id) {
//         this.employeeData.splice(index, 1);
//         localStorage.setItem('employeeData',JSON.stringify(store.employeeData));
//         break;
//       }
//     }
//   }
// };

// function initialize(){
//     if(localStorage.getItem('employeeData') != null){
//         store.employeeData = JSON.parse(localStorage.getItem('employeeData'));
//     }else{
//         localStorage.setItem('employeeData',JSON.stringify(store.employeeData));
//     }
// }
// //----------------------LOADING FUNCTION TO HTML---------------------
// function loadData(gridData) {
//   var table =
//     "<table><tr><th>Employee ID</th><th>Employee Name</th><th>Job Title</th><th>Salary</th><th>Actions</th></tr>";
//   gridData.forEach(element => {
//     table +=
//       "<tr><td>" +
//       element.employeeId +
//       "</td><td>" +
//       element.employeeName +
//       "</td><td>" +
//       element.jobTitle +
//       "</td><td>" +
//       element.salary +
//       "</td><td><a class='btn-danger' onclick='fnDelete(" +
//       element.employeeId +
//       ")'>Delete</a>&nbsp;&nbsp<a class='btn-edit' onclick= 'fnEdit()'>Edit</a>&nbsp;&nbsp;<a class='btn-view' onclick='fnDetails()'>View</a></tr>";
//   });

//   table += "</table>";
//   document.getElementById("grid").innerHTML = table;
// }

// //--------------DISPLAYING TO HTML-----------------------------------------
// window.onload = function() {
//     initialize();
//   document.getElementById("appName").innerHTML = store.appName;

//   loadData(store.employeeData);
//   toggleForm();
//   document.getElementById("btnAddNew").addEventListener("click", function() {
//     store.isAddorEdit = true;
//     toggleForm();
//   });

//   document.getElementById("btnSave").addEventListener("click", function() {
//     var employee = {
//       employeeId: document.getElementById("txtEmployeeId").value,
//       employeeName: document.getElementById("txtEmployeeName").value,
//       jobTitle: document.getElementById("txtJobTitle").value,
//       salary: document.getElementById("txtSalary").value
//     };
//     console.log(employee);
//     store.addEmployee(employee);
//     console.log(store.employeeData);
//     store.isAddorEdit = false;
//     toggleForm();
//     loadData(store.employeeData);
//   });
// };

// document.getElementById("btnCancel").addEventListener("click", function() {
//   store.isAddorEdit = false;
//   toggleForm();
//   loadData(store.employeeData);
// });
// function toggleForm() {
//   if (store.isAddorEdit) {
//     document.getElementById("employeeFormContainer").style.display = "block";
//     document.getElementById("grid").style.display = "none";
//   } else {
//     document.getElementById("grid").style.display = "block";
//     document.getElementById("employeeFormContainer").style.display = "none";
//   }
// }

// function fnDelete(id) {
//   var status = confirm("Are you sure you want to delete Employee?");
//   if (status) {
//     store.deleteEmployee(id);
//     loadData(store.employeeData);
//   }
// }

// //--------------------User Data Store-------------------------
// //------------------STORE OBJECT-------------------------
// // var users = {
// //   appName: "Online Telephone Directory",
// //   appVersion: "1.0",
// //   isAddorEdit: false,
// //   userData: [
// //     {
// //       //userId: 101,
// //       username: "admin",
// //       password: "admin",
// //       //gender: "Male",
// //       email: "admin@admin.com",
// //       mobile: "1234567890"
// //     }
// //   ],
// //   addUser: function(users) {
// //     this.userData.push(users);
// //     localStorage.setItem("userData", JSON.stringify(users.userData));
// //   }
// //   //   updateEmployee:function(employee){
// //   //       this.data.
// //   //   }
// //   // deleteEmployee: function(id) {
// //   //   for (var index = 0; index < this.employeeData.length; index++) {
// //   //     if (this.employeeData[index].employeeId == id) {
// //   //       this.employeeData.splice(index, 1);
// //   //       localStorage.setItem('employeeData',JSON.stringify(store.employeeData));
// //   //       break;
// //   //     }
// //   //   }
// //   // }
// // };

// // function initialize() {
// //   // if(localStorage.getItem('userData') != null){
// //   //  store.userData = JSON.parse(localStorage.getItem('userData'));
// //   // }else{
// //   localStorage.setItem("userData", JSON.stringify(users.userData));
// //   //  }
// // }
// // //----------------------LOADING FUNCTION TO HTML---------------------
// // // function loadData(gridData) {
// // //   var table =
// // //     "<table><tr><th>Employee ID</th><th>Employee Name</th><th>Job Title</th><th>Salary</th><th>Actions</th></tr>";
// // //   gridData.forEach(element => {
// // //     table +=
// // //       "<tr><td>" +
// // //       element.employeeId +
// // //       "</td><td>" +
// // //       element.employeeName +
// // //       "</td><td>" +
// // //       element.jobTitle +
// // //       "</td><td>" +
// // //       element.salary +
// // //       "</td><td><a class='btn-danger' onclick='fnDelete(" +
// // //       element.employeeId +
// // //       ")'>Delete</a>&nbsp;&nbsp<a class='btn-edit' onclick= 'fnEdit()'>Edit</a>&nbsp;&nbsp;<a class='btn-view' onclick='fnDetails()'>View</a></tr>";
// // //   });

// // //   table += "</table>";
// // //   document.getElementById("grid").innerHTML = table;
// // //}

// // //--------------DISPLAYING TO HTML-----------------------------------------
// // window.onload = function() {
// //   initialize();
// //   document.getElementById("appName").innerHTML = users.appName;

// //   //loadData(user.userData);
// //   //  toggleForm();
// //   // document.getElementById("btnAddNew").addEventListener("click", function() {
// //   //   store.isAddorEdit = true;
// //   //   toggleForm();
// //   // });

// //   document.getElementById("btnSubmit").addEventListener("click", function() {
// //     //var userId = 1;
// //     var userData = {
// //       //userId: userid+1,
// //       username: document.getElementById("txtUsername").value,
// //       password: document.getElementById("txtPassword").value,
// //       //gender: document.getElementById("rdGender").value,
// //       email: document.getElementById("txtEmail").value,
// //       mobile: document.getElementById("txtMobile").value
// //     };
// //     alert(userData.username + " "+ userData.password);
// //     console.log(userData);
// //     if(users.addUser(userData)){
// //       alert("successful"+ userData.username);
// //     }else{
// //       alert("not successful "+ userData.username);
// //     }
// //     console.log(users.userData);
// //     users.isAddorEdit = false;
// //     //toggleForm();
// //     //loadData(user.userData);
// //   });
// // };

// // // document.getElementById("btnCancel").addEventListener("click", function() {
// // //   store.isAddorEdit = false;
// // //   //toggleForm();
// // //   //loadData(user.userData);
// // // });
// // // function toggleForm() {
// // //   if (store.isAddorEdit) {
// // //     document.getElementById("employeeFormContainer").style.display = "block";
// // //     document.getElementById("grid").style.display = "none";
// // //   } else {
// // //     document.getElementById("grid").style.display = "block";
// // //     document.getElementById("employeeFormContainer").style.display = "none";
// // //   }
// // // }

// // // function fnDelete(id) {
// // //   var status = confirm("Are you sure you want to delete Employee?");
// // //   if (status) {
// // //     store.deleteEmployee(id);
// // //     loadData(store.employeeData);
// // //   }
// // // }

var store = {
  appName: "Online Telephone Directory",
  appVersion: "1.0",
  userData: [
    {
      userID: "",
      username: "",
      password: "",
      email: "",
      mobile: ""
    }
  ],

  initializeUserData: function() {
    if (
      localStorage.getItem("userData") != null &&
      localStorage.getItem("userData") != "undefined"
    ) {
      this.userData = JSON.parse(localStorage.getItem("userData"));
    } else {
      localStorage.setItem("userData", JSON.stringify(this.userData));
    }
  },

  addUser: function(users) {
    users.userID = this.userData.length + 1;
    this.userData.push(users);
    localStorage.setItem("userData", JSON.stringify(this.userData));
  },

  deleteUser: function(users) {
    for (let idx = 0; idx <= this.userData.length; idx++) {
      if (this.userData[idx].userID == users) {
        this.userData.splice(idx, 1);
        localStorage.setItem("userData", JSON.stringify(store.userData));
        break;
      }
    }
  },

  editUser: function(users) {
    for (let idx = 0; idx <= this.userData.length; idx++) {
      if (this.userData[idx].userID == users) {
        //this.userData.splice(idx, 1);
        localStorage.setItem("userData", JSON.stringify(store.userData));
        break;
      }
    }
  },

  validateUser: function(username, password) {
    var isValid = false;
    var id;
    if (
      localStorage.getItem("userData") != null &&
      localStorage.getItem("userData") != "undefined"
    ) {
      this.userData = JSON.parse(localStorage.getItem("userData"));
    }
    for (var i = 0; i < this.userData.length; i++) {
      if (
        this.userData[i].username == username &&
        this.userData[i].password == password
      ) {
        isValid = true;
        id = this.userData[i].userID;
        break;
      }
    }
    return isValid, id;
  },

  getUserByUserId: function(userId) {
    var obj = null;
    for (var i = 0; i < this.userData.length; i++) {
      if (this.userData[i].userID == userId) {
        obj = this.userData[i];
        break;
      }
    }
    return obj;
  },

  loadData: function loadData(gridData) {
    var display =
      "<table><tr><th>UserID</th><th>Username</th><th>Password</th><th>Email</th><th>Mobile</th><th>Action</th></tr>";
    gridData.forEach(element => {
      display +=
        "<tr><td>" +
        element.userID +
        "</td><td>" +
        element.username +
        "</td><td>" +
        element.password +
        "</td><td>" +
        element.email +
        "</td><td>" +
        element.mobile +
        "</td><td><a class = 'btn-danger' onclick = 'fnDelete(" +
        element.userID +
        ")'>Delete</a>&nbsp;&nbsp<a class = 'btn-primary' id='btnEdit'>Edit</a></td></tr>";
    });
    display += "</table>";

    if (document.getElementById("grid") != null) {
      document.getElementById("grid").innerHTML = display;
    }
  },
  initializeAppName: function() {
    document.getElementById("appName").innerHTML = this.appName;
  },

  contactData: [
    {
      contactID: "",
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      userID: ""
    }
  ],
  initializeContactData: function() {
    if (
      localStorage.getItem("contactData") != null &&
      localStorage.getItem("contactData") != "undefined"
    ) {
      this.contactData = JSON.parse(localStorage.getItem("contactData"));
    } else {
      localStorage.setItem("contactData", JSON.stringify(this.contactData));
    }
  },

  addContact: function(contacts) {
    contacts.contactID = this.contactData.length + 1;
    this.contactData.push(contacts);
    localStorage.setItem("contactData", JSON.stringify(this.contactData));
  },

  loadContactData: function loadContactData(gridData) {
    var display =
      "<table><tr><th>ContactID</th><th>First Name</th><th>Last Name</th><th>Email</th><th>Mobile</th><th>userID</th></tr>";
    gridData.forEach(element => {
      display +=
        "<tr><td>" +
        element.contactID +
        "</td><td>" +
        element.firstName +
        "</td><td>" +
        element.lastName +
        "</td><td>" +
        element.email +
        "</td><td>" +
        element.mobile +
        "</td><td>" +
        element.userID +
        "</td></tr>";
    });
    display += "</table>";

    if (document.getElementById("displayContacts") != null) {
      document.getElementById("displayContacts").innerHTML = display;
    }
  }
};

function fnDelete(user) {
  var status = confirm("Are you sure you want to delete this user?");
  if (status) {
    store.deleteUser(user);
    store.loadData(store.userData);
  }
}

function fnEdit(user) {
  store.editUser(user);
}
