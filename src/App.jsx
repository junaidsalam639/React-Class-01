import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar'
import RecipeReviewCard from './component/Card';
import Slider from './component/Slider';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Slider/>
    <RecipeReviewCard/>
    <RecipeReviewCard/>
    <RecipeReviewCard/>
    <RecipeReviewCard/>
    <RecipeReviewCard/>
    <RecipeReviewCard/>
    <RecipeReviewCard/>
    <RecipeReviewCard/>
    </div>
  );
}

export default App;
