const links = document.querySelectorAll(".navbar > nav > ul > li");
const cards = document.querySelectorAll(".card");

const buttons = document.querySelectorAll('.readMoreBtn');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const moreContent = this.previousElementSibling;
        if (moreContent.style.display === 'none') {
            moreContent.style.display = 'block';
            this.textContent = 'Read Less';
        } else {
            moreContent.style.display = 'none';
            this.textContent = 'Read More';
        }
    });
});


[...links].map((link, index) => {
  link.addEventListener("click", () => onLinkClick(link, index), false);
});

const onLinkClick = (link, currentIndex) => {
  const selectedItem = link.getAttribute("name");
  cards.forEach((card) => {
    card.classList.remove("active");
  });
  // const currentCard = [...cards].find((card) =>
  //   card.classList.contains(selectedItem)
  // );

  const currentCard = [...cards].find((card) =>
    Object.keys(card.dataset).includes(selectedItem)
  );
  currentCard.classList.add("active");
  highLightSelectedLink(currentIndex);
};

const highLightSelectedLink = (currentIndex) => {
  links.forEach((link) => {
    link.classList.remove("selectedLink");
  });
  links[currentIndex].classList.add("selectedLink");
};