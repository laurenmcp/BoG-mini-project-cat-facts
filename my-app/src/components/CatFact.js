
export default function CatFact(props) {

    const { data, catFactArray, setCatFactArray } = props;

    //Set color based on like property
    const customBlue = `rgba(24, 119, 140, 55)`;
    const customPink = `rgba(166, 107, 86, 65)`;
    var bgColor = (data.liked) ? customPink : customBlue;

    //Switch the data's liked property. Alters the state of the catFactArray.
    function toggle() {
        let temp = [
            ...catFactArray
        ]
        let idx = temp.indexOf(data)
        temp[idx] = {
            fact: data.fact,
            liked: !data.liked
        }
        setCatFactArray(temp)
      }

    //Return a div to hold the fact with background color coordinated to status of liked.
    return (
            <div onClick={toggle} style={{background: bgColor}} className="catFact"> 
                <p>{data.fact}</p>
            </div>
    )
}
