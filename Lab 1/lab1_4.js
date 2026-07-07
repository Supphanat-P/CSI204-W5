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
      return true
}