import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; 
import CardsGrid from "./CardsGrid.jsx";
const CardsGridContainer = () =>{
    const[characters, setCharacters] = useState([]);

    //console.log("Characters",characters);

    const{ character } = useParams();

    const getCharactersAxios = async()=>{
        const getAxios = await axios.get("https://rickandmortyapi.com/api/character");
        //console.log("Obtengo datos de getAxios", getAxios)
        setCharacters(getAxios.data.results);

    }

    console.log("Hi,We are Characters", characters);

   useEffect(() =>{
     getCharactersAxios();
     },[character]);

    return(

        <CardsGrid characters = {characters}/>
    );
};

export default CardsGridContainer;