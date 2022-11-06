import './App.css';
import { useEffect, useState } from 'react';
import CatFact from './components/CatFact';
import PageButtons from './components/PageButtons';
import FeaturedFact from './components/FeaturedFact';
import cat2 from "./images/cat2.jpg"

function App() {
  
  //Use state on number of facts, current catFact, catFact array, current page index, and render array
  const [ numFacts, setNumFacts ] = useState(0)
  const [ catFact, setCatFact ] = useState({})
  const [ catFactArray, setCatFactArray ] = useState([])
  const [ currentPageIndex, setCurrentPageIndex ] = useState(1);
  const [ renderArr, setRenderArr ] = useState([]);


  //Push current cat fact to catFactArray and fetch a new one when the numFacts increases on click of "get new fact" button
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

  //Rerender the history to show 10 facts depending on the pageIndex
  var min;
  var max;
  useEffect(() => {
    var temp = catFactArray;
    min = 2 + ((currentPageIndex - 1) * 10);
    max = 12 + ((currentPageIndex - 1) * 10);
    var show = temp.slice(min, max);
    show = show.reverse();
    setRenderArr(show);
    console.log(renderArr)
  }, [currentPageIndex, catFactArray, numFacts])
  
  //Increment the current page index if the history page is full to ensure the most recent 10 facts appear by default
  useEffect(() => {
    if (numFacts > 1 && (numFacts - 1) % 10 == 0) {
      setCurrentPageIndex(currentPageIndex + 1);
    }
  }, [numFacts])

  //Return a header, get button, FeaturedFact, map of currently displayed CatFacts, and PageButton
  return (
    <div className="CatFactApp">
      <button className="getButton buttonText" onClick={() => setNumFacts(numFacts + 1)}><img src={cat2}></img><h1>GET A COOL CAT FACT</h1></button>
      <FeaturedFact data={catFact} num={numFacts} catFact={catFact} setCatFact={setCatFact}></FeaturedFact>
      <div id="spacer"><h2>history</h2></div>
      <div>
      {renderArr.map((e) => {
                console.log("HISTORY RERENDER")
                let k = renderArr.indexOf(e)
                return <CatFact data={e} key={k} catFactArray={catFactArray} setCatFactArray={setCatFactArray}></CatFact>;
            })}
      </div>
      <PageButtons index={currentPageIndex} setIndex={setCurrentPageIndex} num={numFacts}></PageButtons>
    </div>
  );
}

export default App;
