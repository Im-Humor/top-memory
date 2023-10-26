import { useState, useEffect } from "react";

export default function Card({
	pokemonNumber,
	index,
	totalNumClicks,
	setTotalNumClicks,
	shuffleCards,
	setBestScoreClicks,
	setCardListState,
	createList,
}) {
	const [pokemonName, setPokemonName] = useState("");
	const [pokemonNumberState, setPokemonNumberState] = useState(pokemonNumber);
	const [pokemonSpriteLink, setPokemonSpriteLink] = useState("");
	const [cardClicks, setCardClicks] = useState(0);
	const [cardPosition, setCardPosition] = useState(index);

	async function getPokemonName(number) {
		const response = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${number}/`,
		);
		const pokemonData = await response.json();
		setPokemonName(pokemonData.name);
	}

	async function getPokemonSpriteLink(number) {
		const response = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${number}/`,
		);
		const pokemonData = await response.json();
		setPokemonSpriteLink(pokemonData.sprites.front_default);
	}

	function onCardClick() {
		setCardClicks(cardClicks + 1);
		setTotalNumClicks(totalNumClicks + 1);
		shuffleCards();
		console.log(pokemonName + " has been clicked");
		console.log(cardClicks + " times clicked");
		if (cardClicks > 0) {
			setBestScoreClicks(totalNumClicks);
			setTotalNumClicks(0);
			setCardListState(createList(10));
		}
	}

	useEffect(() => {
		getPokemonName(pokemonNumberState);
	});
	useEffect(() => {
		getPokemonSpriteLink(pokemonNumberState);
	});

	return (
		<li className="card" onClick={onCardClick}>
			<div className="cardPicture">
				<img src={pokemonSpriteLink} alt="test" />
			</div>
			<div className="cardNumber">{pokemonNumber}</div>
			<div className="cardName">{pokemonName}</div>
		</li>
	);
}
