import { useState, useEffect} from "react";
import axios from "axios";
import TableUserList from "./TableUserList";
import { useParams } from "react-router-dom";
//Peticion Axios 

const TableUsersContainer = () => {
    const[users, setUsers] = useState([]);

    console.log("Users initial", users);
    
    const {user} = useParams();
    console.log("Params", user);
    

    const getUsersAxios = async()=>{
        const getAxios = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log("Get Axios", getAxios);
        if(user) setUsers(getAxios.data); // traigo todos los datos de usuario
        console.log("GetAxios date", setUsers(getAxios.data));
            
    };
    console.log("Users end", users);

    useEffect(() => {
         getUsersAxios();
     },[user]);

 
    return(
        <>
        <h1>Hola soy get Axios, y no se me antoja traer ninguna tabla</h1>
        <TableUserList users={users}/>
        </>
    );
};

export default TableUsersContainer;