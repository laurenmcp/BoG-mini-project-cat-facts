
function FeaturedFact(props) {

    const { data, num, catFact, setCatFact } = props;

    //Set color based on like property
    const customBlue = `rgba(24, 119, 140, 55)`;
    const customPink = `rgba(166, 107, 86, 65)`;
    var bgColor = (data.liked) ? customPink : customBlue;
    
    //Switch the data's liked property. Alters the state of catFact.
    console.log(data)
    function toggle() {
        let temp = {
            fact: data.fact,
            liked: !data.liked
        }
        setCatFact(temp)
      }

    //Return a div to hold the most recent fact with background color coordinated to status of liked.
    return (
        <div  onClick={toggle} style={{background: bgColor}} className="feature catFact">
            <h3>{data.fact}</h3>
        </div>
    )
}

export default FeaturedFact;