for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    const data = axios.get(
      "https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en"
    );
    console.log(data);
    data.then(response => {
      const cards = Cards(response.data);
      entryPoint.appendChild(cards);
    });
  }, 3000);
  const data = axios.get(
    "https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en"
  );
  console.log(data);
  data.then(response => {
    const cards = Cards(response.data);
    entryPoint.appendChild(cards);
  });
}

entryPoint = document.querySelector(".cards-container");

function Cards(quote) {
  const newCard = document.createElement("div");
  const text = document.createElement("p");
  const authorPerson = document.createElement("h4");
  const link = document.createElement("a");

  text.textContent = quote.quoteText;
  authorPerson.textContent = quote.quoteAuthor;
  link.href = quote.quoteLink;
  link.textContent = quote.quoteLink;

  newCard.appendChild(text);
  newCard.appendChild(authorPerson);
  newCard.appendChild(link);

  return newCard;
}

// console.log("Cards.js is running")
