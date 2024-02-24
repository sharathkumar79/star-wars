import './App.css';
import PlanetsDirectory from "./components/PlanetsDirectory";

function App() {
  return (
    <>
    <div className='header'> 
    <h1>Star Wars Planets Explorer</h1>
    </div>
    <div className='main'>
      <PlanetsDirectory/>
    </div>
    {/* <div className='footer'>
        <p>&copy; 2024 Star Wars Planets Explorer. All rights reserved.</p>
    </div> */}
    </>
  );
}

export default App;
