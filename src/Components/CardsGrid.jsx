import PersonajeCard from "./PersonajeCard.jsx";
const CardsGrid = ({ characters }) => {
    return (
        <ul>
            {characters.map((character, index) => {
               return (
                    <PersonajeCard 
                    key={index} 
                    image = {character.image}
                    name = {character.name}
                    />
               );
            })}
        </ul>

    );

};

export default CardsGrid;