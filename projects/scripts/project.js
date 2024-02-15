document.addEventListener("DOMContentLoaded", function () {
  const quoteText = document.querySelector(".quote-text");
  const quoteAuthor = document.querySelector(".quote-author");
  const newQuoteBtn = document.getElementById("new-quote-btn");

  const getNewQuote = async () => {
    // API for quotes
    const url = "https://quote-garden.onrender.com/api/v3/quotes/random";

    try {
      // Fetch the data from the API
      const response = await fetch(url);

      // Check if the response is successful
      if (!response.ok) {
        throw new Error("Failed to fetch quote");
      }

      // Convert response to JSON
      const data = await response.json();

      // Retrieve quote and author from the response
      const quote = data.data[0].quoteText;
      const auth = data.data[0].quoteAuthor;

      // Check if author is null or empty
      if (!auth) {
        quoteAuthor.textContent = "Anonymous";
      } else {
        quoteAuthor.textContent = "~ " + auth;
      }

      // Display the quote
      quoteText.textContent = `"${quote}"`;
    } catch (error) {
      console.error(error);
      // Display an error message on failure
      quoteText.textContent = "Failed to fetch quote. Please try again later.";
    }
  };

  // Event listener for generating a new quote
  newQuoteBtn.addEventListener("click", getNewQuote);

  // Initial call to get a new quote
  getNewQuote();
});
