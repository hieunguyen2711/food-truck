import './App.css';
import FoodTruck from './components/FoodTruck';

const App = () => {

  return (
    <div className="App">
        
          <img src="/roof.png" alt="Food Truck Roof" />
          <h1>Food Truck Favorites</h1>
        <div class="card-list" > 
            <div className="Card">
                <FoodTruck src="/tacos-pic.webp" truckName='Test' country='Vietnam' alt='Test-pic'/>
            </div>
            <div className="Card">
                <FoodTruck src="/indian-pic.jpg" truckName='' country=''/>
            </div>
            <div className="Card">
                <FoodTruck src="/halal-pic.webp" truckName='' country=''/>
            </div>
            <div className="Card">
                <FoodTruck src="/nydosas-pic.jpg" truckName='' country=''/>
            </div>
            <div className="Card">
                <FoodTruck src="/jamaican-pic.jpg" truckName='' country=''/>
            </div>
            <div className="Card">
                <FoodTruck src="/bangali-pic.jpg" truckName='' country=''/>
            </div>
            <div className="Card">
                <FoodTruck src="/greek-pic.jpg" truckName='' country=''/>
            </div>
            <div className="Card">
                <FoodTruck src="/china-pic.jpg" truckName='' country=''/>
            </div>
            <div className="Card">
                <FoodTruck src="/gussy-pic.jpg" truckName='' country=''/>
            </div>
            <div className="Card">
                <FoodTruck src="/patacon-pic.jpg" truckName='' country=''/>
            </div>
            <div className="Card">
                <FoodTruck src="/momo-pic.jpg" truckName='' country=''/>
            </div>
            <div className="Card">
                <FoodTruck src="/makina-pic.jpg" truckName='' country=''/>
            </div>
        


         </div>
        
      
    </div>
  )
}

export default App