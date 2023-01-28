import axios from "axios";
import { useEffect, useState } from "react";
import Card from './components/Card';


function App() {

  const [mealsData, setMealsData] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s="+ inputSearch).then
    ( (res) => setMealsData(res.data.meals))
  }, [inputSearch])
  
  return (
    <div className="app-container">
      <h1>Cooking app</h1>
      <input type="text" placeholder="Taper le nom d'un aliment" onChange={(e) => setInputSearch(e.target.value)}/>
      <div className="meals-container">
        {mealsData.map( meal => 
        <Card key={meal.idMeal} meal={meal}/>
        )}
      </div>
    </div>
  );
}

export default App;
