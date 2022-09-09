import { Route, Routes } from "react-router-dom";
import Menu from "./Components/Menu";
import TableUsersContainer from "./Components/TableUsersContainer";
import Form from "./Components/Form";
import GridCards from "./Components/GridCards";


function App() {
    //Renderizamos el componente
    return (
        <div>
            <Menu/>
            <Routes>
                <Route
                    path="/"
                    element = {<h1>Inicio</h1>}
                />
                <Route 
                    path="/user"
                    element = {<TableUsersContainer />}
                />
                <Route
                    path="/r&m"
                    element = {<GridCards/>}
                />

                <Route 
                    path="/contact"
                    element={<Form />}
                />
    
            </Routes>

        </div>

    )
}
export default App;