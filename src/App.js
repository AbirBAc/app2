import './App.css';
import chien from "./chien.jpg"
import './style.css' ;

function App() {
  return (
    <div className="App">
      <div className=" title red">welcome</div>
      <img src={"/nature.JPG"} alt="nature" />
      <br />

      <img src={chien} alt='chien.JPG' />

    </div >
  );
}

export default App;
