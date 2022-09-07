import { Monster } from "../../App";
import "./card.styles.css";

type CardProps = {
    monster: Monster;
    index: number;
}

const Card = ({ monster, index }: CardProps) => {
    const { name, id, email } = monster;
    return (
        <div key={id} className="card-container">
            <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=${index}&size=180x180`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
};

export default Card;
