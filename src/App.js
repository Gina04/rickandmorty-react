import { Route, Routes } from "react-router-dom";
import Menu from "./Components/Menu";
import TableUsersContainer from "./Components/TableUsersContainer";
import Formulario from "./Components/Formulario";
import CardsGridContainer from "./Components/CardsGridContainer";


function App() {
    //Renderizamos el componente
    return (
        <div className="app">
            <header>
                <Menu/>
            </header>
            <main>
            <Routes>
                <Route
                    path="/"
                    element = {<h1>Hi, How are you?</h1>}
                />
                <Route 
                    path="/user"
                    element = {<TableUsersContainer />}
                />
                <Route
                    path="/character"
                    element = {<CardsGridContainer />}
                />
                <Route 
                    path="/contact"
                    element={<Formulario />}
                />
            </Routes>
            </main>


        </div>

       

    )
}
export default App;