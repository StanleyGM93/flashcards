import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ROUTES from "../app/routes";
import { useSelector, useDispatch } from "react-redux";
import { quizActionCreator } from "../features/quizzes/quizzesSlice";
import { addCard } from "../features/cards/cardSlice";

export default function NewQuizForm() {
	const [name, setName] = useState("");
	const [cards, setCards] = useState([]);
	const [topicId, setTopicId] = useState("");
	const history = useHistory();
	const { topics } = useSelector((state) => state.topics);
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (name.length === 0) {
			return;
		}
		if (topicId === "") {
			return;
		}
		const cardIds = [];

		// create the new cards here and add each card's id to cardIds'
		const id = uuidv4();
		cards.map((card) => {
			const cardId = uuidv4();
			const { front, back } = card;
			dispatch(addCard({ cardId, front, back }));
			cardIds.push(cardId);
			return cardIds;
		});

		// create the new quiz here
		dispatch(quizActionCreator({ id, name, topicId, cardIds }));

		history.push(ROUTES.quizzesRoute());
	};

	const addCardInputs = (e) => {
		e.preventDefault();
		setCards(cards.concat({ front: "", back: "" }));
	};

	const removeCard = (e, index) => {
		e.preventDefault();
		setCards(cards.filter((card, i) => index !== i));
	};

	const updateCardState = (index, side, value) => {
		const newCards = cards.slice();
		newCards[index][side] = value;
		setCards(newCards);
	};

	return (
		<section>
			<h1>Create a new quiz</h1>
			<form onSubmit={handleSubmit}>
				<input
					id="quiz-name"
					value={name}
					onChange={(e) => setName(e.currentTarget.value)}
					placeholder="Quiz Title"
				/>
				<select
					id="quiz-topic"
					onChange={(e) => setTopicId(e.currentTarget.value)}
					placeholder="Topic"
				>
					{Object.values(topics).length === 0 ? (
						<option value="add-topic">Please add a topic</option>
					) : (
						<option value="Topic" disabled>
							Please select a topic
						</option>
					)}
					{Object.values(topics).map((topic) => (
						<option key={topic.id} value={topic.id}>
							{topic.name}
						</option>
					))}
				</select>
				{cards.map((card, index) => (
					<div key={index} className="card-front-back">
						<input
							id={`card-front-${index}`}
							value={cards[index].front}
							onChange={(e) =>
								updateCardState(index, "front", e.currentTarget.value)
							}
							placeholder="Front"
						/>

						<input
							id={`card-back-${index}`}
							value={cards[index].back}
							onChange={(e) =>
								updateCardState(index, "back", e.currentTarget.value)
							}
							placeholder="Back"
						/>

						<button
							onClick={(e) => removeCard(e, index)}
							className="remove-card-button"
						>
							Remove Card
						</button>
					</div>
				))}
				<div className="actions-container">
					<button onClick={addCardInputs}>Add a Card</button>
					<button>Create Quiz</button>
				</div>
			</form>
		</section>
	);
}
