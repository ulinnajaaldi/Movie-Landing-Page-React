import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Tranding from "./components/Tranding";
import Superhero from "./components/Superhero";

import "./style/style.css";

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      <div className="tranding">
        <Tranding />
      </div>
      <div className="superhero">
        <Superhero />
      </div>
    </div>
  );
}

export default App;
