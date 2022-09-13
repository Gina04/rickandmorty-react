import { useState, useEffect } from "react";
import axios from "axios";
import TableUserList from "./TableUserList";
import { useParams } from "react-router-dom";
import styles from "../Styles/app.module.css"

//Peticion Axios 

const TableUsersContainer = () => {
    const [users, setUsers] = useState([]);

    console.log("Users initial", users);

    const { user } = useParams();
    console.log("Params", user);


    const getUsersAxios = async () => {
        const getAxios = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log("Get Axios", getAxios);
        setUsers(getAxios.data); // traigo todos los datos de usuario

    };
    console.log("Users end", users);

    useEffect(() => {
        getUsersAxios();
    }, [user]);


    return (
            
                <TableUserList users={users} />
                  
       
                
    );
};

export default TableUsersContainer;