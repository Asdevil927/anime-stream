const search = document.getElementById("search");

search.addEventListener("keyup", () => {

  const value = search.value.toLowerCase();

  document.querySelectorAll(".card").forEach(card => {

    const text = card.innerText.toLowerCase();

    if (text.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }

  });

});

const buttons = document.querySelectorAll(".category-btn");

buttons.forEach(button => {

  button.addEventListener("click", () => {

    const category = button.dataset.category;

    document.querySelectorAll(".card").forEach(card => {

      if (
        category === "all" ||
        card.dataset.category === category
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }

    });

  });

});
