export function TotalClicks({ totalNumClicks }) {
	return <div className="total-clicks">Current clicks {totalNumClicks}</div>;
}

export function BestScore({ bestScoreClicks }) {
	return <div className="best-score">Best score {bestScoreClicks}</div>;
}
