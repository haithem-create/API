import "./App.css";
import axios from "axios";
import DataFetching from "./component/DataFetching";
import Card from "./component/Cards";
function App() {
  return (
    <div className="App">
      <DataFetching />
    </div>
  );
}

export default App;
