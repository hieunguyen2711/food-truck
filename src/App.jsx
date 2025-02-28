import './App.css';
import FoodTruck from './components/FoodTruck';
import tacosPic from "./components/images/tacos-pic.webp";
import indianPic from "./components/images/indian-pic.jpg";
import halalPic from "./components/images/halal-pic.webp";
import nyDosas from "./components/images/nydosas-pic.jpg";
import jamaicanPic from "./components/images/jamaican-pic.jpg";
import bangaliPic from "./components/images/bangali-pic.jpg";
import greekPic from "./components/images/greek-pic.jpg";
import chinaPic from "./components/images/china-pic.jpg";
import gussyPic from "./components/images/gussy-pic.jpg";
import pantaconPic from "./components/images/patacon-pic.jpg";
import momoPic from "./components/images/momo-pic.jpg";
import makinaPic from "./components/images/makina-pic.jpg";



const App = () => {

  return (
    <div className="App">
        
          <img src="/roof.png" alt="Food Truck Roof" />
          <h1>Food Truck Favorites</h1>
        <div class="card-list" > 
            <div className="Card">
                <FoodTruck src={tacosPic} truckName='Test' country='Vietnam' alt='Test-pic'/>
            </div>
            <div className="Card">
                <FoodTruck src={indianPic} truckName='' country=''/>
            </div>
            <div className="Card">
                <FoodTruck src={halalPic} truckName='' country=''/>
            </div>
            <div className="Card">
                <FoodTruck src={nyDosas} truckName='' country=''/>
            </div>
            <div className="Card">
                <FoodTruck src={jamaicanPic} truckName='' country=''/>
            </div>
            <div className="Card">
                <FoodTruck src={bangaliPic} truckName='' country=''/>
            </div>
            <div className="Card">
                <FoodTruck src={greekPic} truckName='' country=''/>
            </div>
            <div className="Card">
                <FoodTruck src={chinaPic} truckName='' country=''/>
            </div>
            <div className="Card">
                <FoodTruck src={gussyPic} truckName='' country=''/>
            </div>
            <div className="Card">
                <FoodTruck src={pantaconPic} truckName='' country=''/>
            </div>
            <div className="Card">
                <FoodTruck src={momoPic} truckName='' country=''/>
            </div>
            <div className="Card">
                <FoodTruck src={makinaPic} truckName='' country=''/>
            </div>
        


         </div>
        
      
    </div>
  )
}

export default App