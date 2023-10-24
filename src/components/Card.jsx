import { Link } from "react-router-dom";
import { useState } from "react";
import more from "./more.png"
import "./Card.css"

// eslint-disable-next-line react/prop-types
const Card = ({id, title, author, description}) => {

    const [count, setCount] = useState(0);

    const updateCount = () => {
        setCount(prevCount => prevCount+ 1);
    }

  return (
    <div className="Card">
        <Link to={'edit/' + id}>
            <img src={more} alt="edit button" className="moreButton"/>
        </Link>
        <h2 className="title">{title}</h2>
        <h3 className="author">{"by " + author}</h3>
        <p className="description">{description}</p>
        <button className="betButton" onClick={updateCount}>👍 Bet Count: {count}</button>
        
    </div>
  )
}

export default Card