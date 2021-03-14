import "./styles/app.scss";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
    return (
        <div class="app">
            <Header />

            <div class="app__body">
                <Sidebar />
                {/* Feeds */}
                {/* Widgets */}

            </div>
        </div>);
}

export default App;
