import Card from "./card";

export default function Cards({
	cardList,
	shuffleCards,
	totalNumClicks,
	setTotalNumClicks,
	setBestScoreClicks,
	setCardListState,
	createList,
}) {
	return (
		<ul className="cards">
			{cardList.map((number, index) => {
				return (
					<Card
						key={number}
						pokemonNumber={number}
						index={index}
						totalNumClicks={totalNumClicks}
						setTotalNumClicks={setTotalNumClicks}
						shuffleCards={shuffleCards}
						setBestScoreClicks={setBestScoreClicks}
						setCardListState={setCardListState}
						createList={createList}
					/>
				);
			})}
		</ul>
	);
}
