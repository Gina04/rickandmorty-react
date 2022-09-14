import { Route, Routes } from "react-router-dom";
import Menu from "./Components/Menu";
import TableUsersContainer from "./Components/TableUsersContainer";
import Formulario from "./Components/Formulario";
import CardsGridContainer from "./Components/CardsGridContainer";
import styles from "./Styles/app.module.css"
import Index from "./Components/Index";


function App() {
    //Renderizamos el componente
    return (
        <div className={styles.app}>
            <header>
                <Menu/>
            </header>
            <main>
            <Routes>
                <Route
                    path="/"
                    element = {<Index/>}
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