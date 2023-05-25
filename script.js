const tours = [
    {
      image: 'bali.jpg',
      title: 'Mystical Bali Adventure',
      description: 'Explore the enchanting island of Bali, with its lush jungles, vibrant culture...',
      buttonText: 'Buy Tour'
    },
    {
      image: 'tokyo.jpg',
      title: 'Futuristic Tokyo Odyssey',
      description: 'Discover the captivating blend of tradition and innovation in Tokyo...',
      buttonText: 'Buy Tour'
    },
    {
      image: 'African_safari.jpg',
      title: 'Majestic African Safari',
      description: 'Embark on a thrilling journey through the African wilderness...',
      buttonText: 'Buy Tour'
    },
    {
      image: 'Rio_Carnival.jpg',
      title: 'Vibrant Rio de Janeiro Carnival',
      description: "Experience the energy and excitement of Rio de Janeiro's world-famous Carnival...",
      buttonText: 'Buy Tour'
    },
    {
      image: 'Alaska.jpg',
      title: 'Alaskan Wilderness Expedition',
      description: 'Immerse yourself in the rugged beauty of Alaska, a land of towering mountains...',
      buttonText: 'Buy Tour'
    },
    {
      image: 'Egypt_pyramids.jpg',
      title: 'Enigmatic Egyptian Odyssey',
      description: 'Uncover the mysteries of ancient Egypt, from the iconic pyramids and Sphinx...',
      buttonText: 'Buy Tour'
    },
    {
      image: 'Machu_Picchu.jpg',
      title: 'Mystical Machu Picchu Trek',
      description: "Venture deep into the heart of the Andes, where you'll uncover the ancient secrets of Machu Picchu...",
      buttonText: 'Buy Tour'
    },
    {
      image: 'New_Zealand.jpg',
      title: 'Scenic New Zealand Adventure',
      description: 'Traverse the stunning landscapes of New Zealand, from the lush rainforests and pristine beaches...',
      buttonText: 'Buy Tour'
    }];


const toursContainer = document.querySelector('.tour-cards');
const createTourCard = (tour) => {
  const tourCard = document.createElement('div');
  tourCard.classList.add('tour-card');

  const tourCardImg = new Image();
  tourCardImg.src = tour.image;
  tourCardImg.classList.add('tour-card__image');
  tourCardImg.alt = tour.title;
  tourCard.appendChild(tourCardImg);

  const tourCardTitle = document.createElement('h3');
  tourCardTitle.classList.add('tour-card__title');
  tourCardTitle.textContent = tour.title;
  tourCard.appendChild(tourCardTitle);

  const tourCardDesc = document.createElement('p');
  tourCardDesc.classList.add('tour-card__description');
  tourCardDesc.textContent = tour.description;
  tourCard.appendChild(tourCardDesc);

  const tourCardButtons = document.createElement('div');
  tourCardButtons.classList.add('tour-card__buttons');

  const tourCardButtonBuy = document.createElement('button');
  tourCardButtonBuy.classList.add('tour-card__button', 'tour-card__button-buy');
  tourCardButtonBuy.textContent = tour.buttonText;
  tourCardButtons.appendChild(tourCardButtonBuy);

  const tourCardButtonInfo = document.createElement('button');
  tourCardButtonInfo.classList.add('tour-card__button', 'tour-card__button-info');
  tourCardButtonInfo.textContent = 'More Info';
  tourCardButtons.appendChild(tourCardButtonInfo);

  tourCard.appendChild(tourCardButtons);

  return tourCard;
};

tours.forEach((tour) => {
  const tourCard = createTourCard(tour);
  toursContainer.appendChild(tourCard);
});

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos || currentScrollPos === 0) {
    // При прокрутке страницы вверх или когда страница находится в самом верху
    document.querySelector(".header").classList.add("visible");
  } else {
    // При прокрутке страницы вниз
    document.querySelector(".header").classList.remove("visible");
  }
  prevScrollpos = currentScrollPos;
};
