// Function to fetch live BNB Coin price
async function fetchBNBPrice() {
  const url = 'https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd';
  try {
    const response = await fetch(url);
    const data = await response.json();
    document.getElementById('bnb-price').textContent = data.binancecoin.usd.toFixed(2); // Display the BNB price
  } catch (error) {
    console.error("Error fetching BNB price: ", error);
    document.getElementById('bnb-price').textContent = "Error fetching data"; // In case of error
  }
}

// Call the function to fetch price
fetchBNBPrice();

// Optional: Refresh BNB price every 60 seconds
setInterval(fetchBNBPrice, 60000);
