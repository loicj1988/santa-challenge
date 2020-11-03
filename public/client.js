
// client-side js
// run by the browser each time your view template is loaded

console.log('hello world :o');


// define variables that reference elements on our page
const santaForm = document.forms[0];

// listen for the form to be submitted and add a new dream when it is
santaForm.onsubmit = function (event) {
  var errors = [];

  // check user id
  if(document.getElementById("userid").value.length > 30) {
    errors.push("Your wish can not be more that 100 characters !");
  }

  if(document.getElementById("userid").value.length == 0) {
    errors.push("Please enter your user id");
  }

  // check wish
  if(document.getElementById("wish").value.length > 100) {
    errors.push("Your wish can not be more that 100 characters !");
  }

  if(document.getElementById("wish").value.length == 0) {
    errors.push("Please enter a wish");
  }

  if(errors.length > 0) {
    alert(errors.join("\n"));
    event.preventDefault();
  }

};
