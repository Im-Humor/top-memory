import { useState, useEffect } from "react";
import "./App.css";

import Cards from "./cards";
import { TotalClicks, BestScore } from "./scores";

export default function App() {
	const [cardListState, setCardListState] = useState([]);
	const [totalNumClicks, setTotalNumClicks] = useState(0);
	const [bestScoreClicks, setBestScoreClicks] = useState(0);

	const createList = (num) => {
		let cardList = [];
		while (cardList.length < num) {
			const randNum = Math.floor(Math.random() * 150 + 1);
			while (!cardList.includes(randNum)) {
				cardList.push(randNum);
			}
		}
		return cardList;
	};

	useEffect(() => {
		setCardListState(createList(10));
	}, []);

	function shuffle(array) {
		let currentIndex = array.length,
			randomIndex;

		while (currentIndex > 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;
			[array[currentIndex], array[randomIndex]] = [
				array[randomIndex],
				array[currentIndex],
			];
		}

		return array;
	}

	function shuffleCards() {
		setCardListState(shuffle(cardListState));
	}

	return (
		<>
			<Cards
				cardList={cardListState}
				shuffleCards={shuffleCards}
				totalNumClicks={totalNumClicks}
				setTotalNumClicks={setTotalNumClicks}
				setBestScoreClicks={setBestScoreClicks}
				createList={createList}
				setCardListState={setCardListState}
			/>
			<TotalClicks totalNumClicks={totalNumClicks} />
			<BestScore bestScoreClicks={bestScoreClicks} />
		</>
	);
}
