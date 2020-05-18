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

	const grid = document.querySelector('.grid');
	const cardsChosen = [];
	const cardChosenId = [];

	const createBoard = () => {
		cardArray.forEach((item, index) => {
			let card = document.createElement('img');
			card.setAttribute('src', 'images/blank.png');
			card.setAttribute('data-id', index);
			card.addEventListener('click', flipCard);
			grid.appendChild(card);
		});
	};

	createBoard();
});
