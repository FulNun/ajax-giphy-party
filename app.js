// app.js

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
  
    const searchTerm = document.getElementById("search-input").value;
    const apiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
    const apiUrl = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}`;
  
    axios.get(apiUrl)
      .then(response => {
        // Get a random GIF from the response data
        const randomIndex = Math.floor(Math.random() * response.data.data.length);
        const gifUrl = response.data.data[randomIndex].images.original.url;
  
        // Display the GIF on the page
        displayGif(gifUrl);
      })
      .catch(error => {
        console.error("Error fetching GIPHY data:", error);
      });
  }
  
  // Function to display a GIF on the page
  function displayGif(url) {
    const gifDiv = document.createElement("div");
    const gifImage = document.createElement("img");
    gifImage.src = url;
  
    const resultsDiv = document.getElementById("results");
    gifDiv.appendChild(gifImage);
    resultsDiv.appendChild(gifDiv);
  }
  
  // Add a submit event listener to the form
  document.getElementById("search-form").addEventListener("submit", handleSubmit);
  
  // Function to handle clear button click
function handleClearButtonClick() {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear the content of the "results" div
  }
  
  // Add a click event listener to the clear button
  document.getElementById("clear-button").addEventListener("click", handleClearButtonClick);