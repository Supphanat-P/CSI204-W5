function validateForm(){
      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();
      let phone = document.getElementById("phone").value.trim();
      let password = document.getElementById("password").value;
      let error = [];

      if (name === "") error.push("please enter your name")
      if (email === "" || !email.includes("@")) error.push("please enter your name")
      if (phone === "" || phone.length < 9 || isNaN(phone)) error.push("please enter a valid 10-digit phone number")
      if (password.length < 6) error.push("password must be at least 6 characters long")

      if (error.length > 0) {
            alert(error.join("\n"))
            return false;
      }
      alert("Registration Successful")
      saveToLocalStorage({name,email,phone,password})
      return true
}

function saveToLocalStorage(userData){
      let  users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(users)
      localStorage.setItem("users",JSON.stringify(users))
      displayUsers
}

function displayUsers() {
      let users = JSON.parse(localStorage.getItem("users"))|| [];
      let html = "<h3>Registered Users</h3><ul>"
      users.forEach((user,index)=>{
            html +=`<li>${index+1}. ${user.name} - ${user.email}</li>`
      });
      html +="</ul>"
      document.getElementById("userList").innerHTML = html
}

function clearStorage() {
      localStorage.removeItem("users");
      displayUsers();
      alert("Data cleared")
}