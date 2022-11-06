function PageButtons(props) {
    const { index, setIndex, num} = props

    //Calculate max and min to limit pagination
    let leftover = num % 10;
    let partialPages = (leftover > 0) ? 1 : 0;
    let max = Math.floor(num / 10) + partialPages;
    let min = 1;
    
    
    return (
        <div className="historyNavButtons">
            <button className="navButton buttonText" onClick={() => setIndex((index - 1 >= min)? index - 1 : min)}><h2>back</h2></button>
            <button className="navButton buttonText" onClick={() => setIndex((index + 1 <= max) ? index + 1 : max)}><h2>next</h2></button>
        </div>
    )
}

export default PageButtons;