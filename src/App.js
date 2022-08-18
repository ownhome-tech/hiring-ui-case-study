import logo from "./ownhome.svg";
import { Color } from "./lib/color";
import { Title2Regular } from "./lib/Typography";
import "./App.css";

function App() {
    return (
        <div className="container">
            <img src={logo} className="logo" alt="OwnHome logo" />
            <Title2Regular style={{ color: Color.NeutralBackgroundPrimary }}>OwnHome UI Case Study</Title2Regular>
        </div>
    );
}

export default App;
