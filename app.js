document.addEventListener('DOMContentLoaded', () => {
	//card options
	const cardArray = [
		{
			name: 'fries',
			img: 'images/fries.png'
		},
		{
			name: 'cheeseburger',
			img: 'images/cheeseburger.png'
		},
		{
			name: 'ice-cream',
			img: 'images/ice-cream.png'
		},
		{
			name: 'pizza',
			img: 'images/pizza.png'
		},
		{
			name: 'milkshake',
			img: 'images/milkshake.png'
		},
		{
			name: 'hotdog',
			img: 'images/hotdog.png'
		},
		{
			name: 'fries',
			img: 'images/fries.png'
		},
		{
			name: 'cheeseburger',
			img: 'images/cheeseburger.png'
		},
		{
			name: 'ice-cream',
			img: 'images/ice-cream.png'
		},
		{
			name: 'pizza',
			img: 'images/pizza.png'
		},
		{
			name: 'milkshake',
			img: 'images/milkshake.png'
		},
		{
			name: 'hotdog',
			img: 'images/hotdog.png'
		}
	];

	cardArray.sort(() => 0.5 - Math.random());

	const grid = document.querySelector('.grid');
	const cardsChosen = [];
	const cardChosenId = [];
	const cardsWon = [];
	const resultDisplay = document.querySelector('#result');

	const createBoard = () => {
		cardArray.forEach((item, index) => {
			let card = document.createElement('img');
			card.setAttribute('src', 'images/blank.png');
			card.setAttribute('data-id', index);
			card.addEventListener('click', flipCard);
			grid.appendChild(card);
		});
	};

	//check for matches
	const checkForMatch = () => {
		let cards = document.querySelectorAll('img');
		const optionOneId = cardChosenId[0];
		const optionTwoId = cardChosenId[1];
		if (cardsChosen[0] === cardsChosen[1]) {
			alert('You found a match');

			cards[optionOneId].setAttribute('src', 'images/white.png');
			cards[optionTwoId].setAttribute('src', 'images/white.png');

			cardsWon.push(cardsChosen);
		} else {
			alert('sorry try again');
			cards[optionOneId].setAttribute('src', 'images/blank.png');
			cards[optionTwoId].setAttribute('src', 'images/blank.png');
		}
		//clear cards
		cardsChosen = [];
		cardChosenId = [];
		resultDisplay.textContent = cardsWon.length;
		if (cardsWon.length === cardArray.length / 2) {
			resultDisplay.textContent = 'Congratulations! You found them all!';
		}
	};

	// flip card
	const flipCard = () => {
		let cardId = event.target.getAttribute('data-id');
		//push the element card name
		cardsChosen.push(cardArray[cardId].name);
		//push the element data ID
		cardChosenId.push(cardId);
		// assign the image to the DOM
		event.target.setAttribute('src', cardArray[cardId].img);
		// call method to check if cards match
		if (cardsChosen.length === 2) {
			setTimeout(checkForMatch, 500);
		}
	};

	createBoard();
});
