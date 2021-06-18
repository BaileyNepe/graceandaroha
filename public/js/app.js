const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

function submitToAPI(e) {
  e.preventDefault();
  //       var URL = "API Gateway";

  var name = document.getElementById("name-input").value;
  var phone = document.getElementById("phone-input").value;
  var email = document.getElementById("email-input").value;
  var desc = document.getElementById("description-input").value;
  if (name == "" || phone == "" || email == "" || desc == "") {
    alert("Please Fill All Required Fields");
    return false;
  }

  emailRE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRE.test(email)) {
    alert("Email Address entered, is not valid");
    return false;
  }
  var data = {
    name: name,
    phone: phone,
    email: email,
    desc: desc,
  };

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("POST", "https://formspree.io/f/moqywyvv");
  xmlhttp.setRequestHeader("Content-Type", "application/json");
  xmlhttp.send(JSON.stringify(data));
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4) {
      var response = JSON.parse(xmlhttp.responseText);
      if (xmlhttp.status === 200) {
        console.log("successful");
        alert("Your message has been sent");
      } else {
        console.log("failed");
      }
    }
  };

  document.getElementById("contact-form").reset();
}
