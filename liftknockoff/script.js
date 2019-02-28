// Create a request variable and assign a new XMLHttpRequest object to it.
request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open("POST", "https://hans-moleman.herokuapp.com/rides", true);

request.onload = function () {
  // Begin accessing JSON data here
  }
}

// Send request
request.send();