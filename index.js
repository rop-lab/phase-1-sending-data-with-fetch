function submitData(name, email) {
    const url = 'http://localhost:3000/users';
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    const body = JSON.stringify({
      name: name,
      email: email
    });
  
    fetch(url, {
      method: 'POST',
      headers: headers,
      body: body
    })
    .then(response => response.json())
    .then(data => {
      // Access the newly converted object
      console.log('Response Data:', data);
  
      // Access the new id from the response
      const newId = data.id;
  
      // Append the new id to the DOM (replace 'your-id-element' with the actual ID of the element)
      document.getElementById('your-id-element').innerText = `New ID: ${newId}`;
    })
    .catch(error => {
      // Handle errors and append the error message to the DOM
      console.error('Error:', error);
      document.getElementById('error-message-element').innerText = `Error: ${error.message}`;
    });
  }
  
  // Example usage
  const exampleName = 'Steve';
  const exampleEmail = 'steve@steve.com';
  submitData(exampleName, exampleEmail);
  