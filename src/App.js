import "./styles/app.scss";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
import Login from "./components/Login";

function App() {
    const user = null;

    return (
        <div class="app">
            {!user ? 
                <Login /> : 
                (<>
                    <Header />

                    <div class="app__body">
                        <Sidebar />
                        <Feed />
                        <Widgets />
                    </div>

                </>)}
        </div>);
}

export default App;
