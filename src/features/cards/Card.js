import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Card({ id }) {
  const { cards } = useSelector((state) => state.cards);
  const card = cards[id];
  const [flipped, setFlipped] = useState(false);

  console.log("cards =" + cards);
  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}
