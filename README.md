# API Consumption Guide for Ujuzi App Test

This guide demonstrates how to set up a simple web page to consume and display API data using a JavaScript framework/library like React or Next.js.

---

## Setup

1. **Create an HTML Page**  
   Set up an HTML page with a script to call the API.

2. **Use a JavaScript Framework/Library**  
   Utilize frameworks like React or Next.js to make API requests.

---

## API Consumption Steps

1. **Send API Requests**  
   Use `fetch` or `axios` to send a request to the API and handle the response.

2. **Parse the JSON Response**  
   Extract and process data from the API response.

3. **Render Data Dynamically**  
   Display the parsed data on the webpage using HTML/CSS.

---

## Example API Response

Here’s a sample JSON response for testing:

```json
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "role": "Admin"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "role": "User"
    }
  ]
}
```

---

## Example Code Snippet

Here’s an example of consuming the API using `fetch`:

```javascript
// Fetch API data
fetch('https://example.com/api')
  .then(response => response.json())
  .then(data => {
    // Process and display the data
    console.log(data);
  })
  .catch(error => console.error('Error fetching data:', error));
```

---

Feel free to clone this repository and extend the functionality for your project!

--- 

This structure makes it easy to follow and engaging for developers exploring the repository.
