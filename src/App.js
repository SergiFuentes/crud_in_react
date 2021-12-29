import { CrudApi } from "./components/CrudApi";
import { CrudApp } from "./components/CrudApp";

function App() {
  return (
    <div className="App">
      <h1>REACT exercices</h1>
      <CrudApi/> 
      <hr/>
      <CrudApp />
      <hr/>
    </div>
  );
}

export default App;
