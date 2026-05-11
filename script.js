const search = document.getElementById("search");

search.addEventListener("keyup", () => {

  const value = search.value.toLowerCase();

  document.querySelectorAll(".card").forEach(card => {

    const title = card.innerText.toLowerCase();

    if (title.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }

  });

});
