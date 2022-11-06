
export default function CatFact(props) {
    //Destructure data from the props

    const { data, catFactArray, setCatFactArray } = props;

    const customBlue = `rgba(24, 119, 140, 55)`;
    const customPink = `rgba(166, 107, 86, 65)`;
    var bgColor = (data.liked) ? customPink : customBlue;

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

    return (
            <div onClick={toggle} style={{background: bgColor}} className="catFact"> 
                <p>{data.fact}</p>
            </div>
    )
}
