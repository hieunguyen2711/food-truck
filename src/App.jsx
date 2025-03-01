import './App.css';
import FoodTruck from './components/FoodTruck';

const App = () => {

  return (
    <div className="App">
        
          <img src="/roof.png" alt="Food Truck Roof" />
          <h1>Food Truck Favorites</h1>
        <div class="card-list" > 
            <div className="Card">
                <FoodTruck src="/tacos-pic.webp" truckName='Birria-Landia' country='Mexican' alt='Birria-Landia Picture' link='https://ww12.thebirrialandia.com/menu/?usid=18&utid=30090233677'/>
            </div>
            <div className="Card">
                <FoodTruck src="/indian-pic.jpg" truckName='Mysttik Masala' country='Indian' alt='Mysttik Masala Picture' link='https://indianfoodny.com/lander'/>
            </div>
            <div className="Card">
                <FoodTruck src="/halal-pic.webp" truckName='The Halal Guys' country='Middle Eastern' alt='The Halal Guys Picture' link='https://thehalalguys.com/menu/'/>
            </div>
            <div className="Card">
                <FoodTruck src="/nydosas-pic.jpg" truckName='NY Dosas' country='Vegetarian' alt='NY Dosas Picture' link='https://nydosas.com/menu/'/>
            </div>
            <div className="Card">
                <FoodTruck src="/jamaican-pic.jpg" truckName='Jerk Pan' country='Jamaican' alt='Jerk Pan Picture' link='https://www.allmenus.com/ny/new-york/360888-jerk-pan/menu/'/>
            </div>
            <div className="Card">
                <FoodTruck src="/bangali-pic.jpg" truckName='Tong' country='Bangladeshi' alt='Tong Picture' link='https://www.facebook.com/Bangladeshistreetfoods/'/>
            </div>
            <div className="Card">
                <FoodTruck src="/greek-pic.jpg" truckName='King Souvlaki of Astoria' country='Greek' alt='King Souvlaki of Astoria Picture' link='https://kingsouvlakinyc.com/'/>
            </div>
            <div className="Card">
                <FoodTruck src="/china-pic.jpg" truckName="Ling's Sweet Mini Cakes" country='Chinese' alt="Ling's Sweet Mini Cakes Picture" link='https://canalstreet.market/'/>
            </div>
            <div className="Card">
                <FoodTruck src="/gussy-pic.jpg" truckName="Uncle Gussy's" country='Greek' alt="Uncle Gussy's" link='https://unclegussys.com/menus/'/>
            </div>
            <div className="Card">
                <FoodTruck src="/patacon-pic.jpg" truckName='Patacon Pisao' country='Venezuelan' alt="Patacon Pisao" link='https://www.pataconpisaonyc.com/menus/'/>
            </div>
            <div className="Card">
                <FoodTruck src="/momo-pic.jpg" truckName="Mom's Mono" country='Tibetan' alt="Mom's Mono Picture" link="https://www.restaurantji.com/ny/jackson-heights/moms-momo-/menu/"/>
            </div>
            <div className="Card">
                <FoodTruck src="/makina-pic.jpg" truckName='Makina Cafe' country='Ethiopian' alt="Makina Cafe Picture" link="https://makinacafenyc.com/"/>
            </div>
        


         </div>
        
      
    </div>
  )
}

export default App