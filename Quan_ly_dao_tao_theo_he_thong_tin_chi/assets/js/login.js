var users = [
  {
    username: "admin1@tlu.edu.vn",
    password: "123",
    permission: "admin",
  },
  {
    username: "admin2@tlu.edu.vn",
    password: "abc",
    permission: "admin",
  },
  {
    username: "admin3@tlu.edu.vn",
    password: "123",
    permission: "admin",
  },
];

function Login() {
  event.preventDefault();
  var username = myForm.username.value;
  var password = myForm.password.value;

  var val = check_user(username, password, users);
  if (val != false) {
    var date = new Date();
    exp_date = date.getTime() + 10 * 24 * 60 * 60 * 1000;
    date.setTime(exp_date);
    document.cookie = "username=" + val.username + ";expires=" + date;
    document.cookie = "permission=" + val.permission + ";expires=" + date;
    if (val.permission == "admin") {
      location.href = "./trangchu.html";
    } else {
      alert(" Username or password invalid");
    }
  } else {
    alert(" Username or password invalid");
  }
}

//    event.preventDefault();
//    var username = myForm.username.value;
//    var password = myForm.password.value;
//
//    var val = check_user(username, password, users);
//    if (val != false) {
//        var date = new Date();
//        exp_date = date.getTime() + 10 * 24 * 60 * 60 * 1000;
//        date.setTime(exp_date);
//        document.cookie = "username=" + val.username + ";expires=" + date;
//        document.cookie = "permission=" + val.permission + ";expires=" + date;
//
//
//
//        if(val.username.split('@'))
//        if(val.username.split('_')){
//
//             if (val.permission == "iug") {
//            location.href = "Teacher.html";
//        } else if (val.permission == "std") {
//            location.href = "Student.html";
//        }else{
//
//        }alert("username must contant '@' and '_'")
//
//       }

//        }

function check_user(username, password, users) {
  for (i in users) {
    var user = users[i];
    if (user.username == username && user.password == password) {
      return user;
    }
  }
  return false;
}
