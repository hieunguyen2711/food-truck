import './App.css';
import FoodTruck from './components/FoodTruck';
import tacosPic from "./components/images/tacos-pic.webp";



const App = () => {

  return (
    <div className="App">
        
          <img src="/roof.png" alt="Food Truck Roof" />
          <h1>Food Truck Favorites</h1>
        
        <div className="Card">
            <FoodTruck src={tacosPic} truckName='Test' country='Vietnam' alt='Test-pic'/>
        </div>
        <div className="Card">
            <FoodTruck truckName='' country=''/>
        </div>
        <div className="Card">
            <FoodTruck truckName='' country=''/>
        </div>
        <div className="Card">
            <FoodTruck truckName='' country=''/>
        </div>
        <div className="Card">
            <FoodTruck truckName='' country=''/>
        </div>
        <div className="Card">
            <FoodTruck truckName='' country=''/>
        </div>
        <div className="Card">
            <FoodTruck truckName='' country=''/>
        </div>
        <div className="Card">
            <FoodTruck truckName='' country=''/>
        </div>
        <div className="Card">
            <FoodTruck truckName='' country=''/>
        </div>
        <div className="Card">
            <FoodTruck truckName='' country=''/>
        </div>
        
      
    </div>
  )
}

export default App