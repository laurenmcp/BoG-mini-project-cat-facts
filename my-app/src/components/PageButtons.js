function PageButtons(props) {

    const { index, setIndex, num} = props

    //Calculate max and min to limit the index.
    let leftover = num % 10;
    let partialPages = (leftover > 0) ? 1 : 0;
    let max = Math.floor(num / 10) + partialPages;
    let min = 1;
    
    //Return back and next buttons which adjust the current page index so long as it is in range / reasonable to the current number of facts.
    return (
        <div className="historyNavButtons">
            <button className="navButton buttonText" onClick={() => setIndex((index - 1 >= min)? index - 1 : min)}><h1>back</h1></button>
            <button className="navButton buttonText" onClick={() => setIndex((index + 1 <= max) ? index + 1 : max)}><h1>next</h1></button>
        </div>
    )
}

export default PageButtons;