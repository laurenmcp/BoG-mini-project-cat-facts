

export default function CatFact(props) {
    //Destructure data from the props

    const { data, num, liked, setLiked} = props;

    var bgColor = (data.liked) ? "red" : "yellow"

    console.log("CAT FACT PROPS")
    console.log(props)


    function toggle() {
        let temp = liked;
        console.log("TESTING")
        console.log(temp);
        console.log(liked);
        if(temp.includes(data)) {
            temp.pop(data)
        } else {
            temp.push(data)
        }
        setLiked(temp)
        console.log(liked);
    }

    return (
            <div onClick={() => toggle} style={{background: bgColor}} className="catFact"> 
                <p>{data.fact}</p>
            </div>

    )
}
