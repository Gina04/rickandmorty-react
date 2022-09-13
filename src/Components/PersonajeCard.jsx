import styles from "../Styles/app.module.css"
const PersonajeCard = ({image, name}) => {
    return(  
        <li className={styles.characterCard}>
            <img src= {image} alt= {name}/>
            <h2>{name}</h2>
        </li>

    )
}

export default PersonajeCard;