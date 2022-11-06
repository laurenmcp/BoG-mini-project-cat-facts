import './App.css';
import { useEffect, useState } from 'react';
import CatFactList from './components/CatFactList';
import PageButtons from './components/PageButtons';
import FeaturedFact from './components/FeaturedFact';

function App() {
  const [ catFact, setCatFact ] = useState({})
  const [ numFacts, setNumFacts ] = useState(0)
  const [ catFactArray, setCatFactArray ] = useState([])
  const [ likedArray, setLikedArray ] = useState ([])
  const [ currentPageIndex, setCurrentPageIndex ] = useState(1);

  useEffect(() => {
    var temp = catFactArray;
    temp.push(catFact);
    setCatFactArray(temp);
    fetch("https://catfact.ninja/fact")
    .then((res) => res.json())
    .then((data) => {
      let f = {
        fact: data.fact,
        liked: false
      }
      setCatFact(f)});
  }, [numFacts])

  useEffect(() => {
    console.log("LIKED CHANGED")
    console.log(likedArray)
    var temp = catFactArray.map((e) => e)
    
    setCatFactArray(temp)
    }, [likedArray])


  console.log("FACT ARRAY")
  console.log(catFactArray)


  console.log("NUMFACTS")
  console.log(numFacts)

  // console.log(document.getElementsByClassName("div"))

  return (
    <div className="CatFactApp">

      <h1>CAT FACTS</h1>
      <button className="getButton buttonText" onClick={() => setNumFacts(numFacts + 1)}><h2>GET NEW FACT</h2></button>
      <FeaturedFact data={catFact} num={numFacts}></FeaturedFact>
      <h1>HISTORY</h1>
      <PageButtons index={currentPageIndex} setIndex={setCurrentPageIndex} num={numFacts}></PageButtons>
      <CatFactList data={catFactArray} num={numFacts} page={currentPageIndex} 
        liked={likedArray} setLiked={setLikedArray}></CatFactList>
    </div>
  );
}

export default App;
