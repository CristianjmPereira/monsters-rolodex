import { Monster } from "../../App";
import Card from "../card/card.component";

import "./card-list.styles.css";
type CardListProps = {
    monsters: Monster[]
}

const CardList = ({ monsters }: CardListProps) => {
    return (
        <div className="card-list">
            {monsters.map((monster, index) => (
                <Card key={monster.id} monster={monster} index={index} />
            ))}
        </div>
    );
};

export default CardList;
