
function FeaturedFact(props) {

    const { data, num, catFact, setCatFact } = props;

    const customBlue = `rgba(24, 119, 140, 55)`;
    const customPink = `rgba(166, 107, 86, 65)`;
    var bgColor = (data.liked) ? customPink : customBlue;
      
    console.log(data)
    function toggle() {
        let temp = {
            fact: data.fact,
            liked: !data.liked
        }
        setCatFact(temp)
      }

    return (
        <div  onClick={toggle} style={{background: bgColor}} className="feature catFact">
            <h3>{data.fact}</h3>
        </div>
    )
}

export default FeaturedFact;