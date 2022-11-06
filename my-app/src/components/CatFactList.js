import { useEffect } from "react";

function CatFactList(props) {
    
    const { data, num, page, liked, setLiked} = props;
    
    console.log("CAT FACT LIST PROPS")
    console.log(props)

    console.log("RENDER OF LIST")

    var list = data;
    var min = 2 + ((page - 1) * 10);
    var max = 12 + ((page - 1) * 10);
    var show = list.slice(min, max);
    show = show.reverse();
    
    console.log("LIKED IN LIST")
    console.log(liked)
    //Map each element of the array into a CatFact Component
    return (
        <div>
            {show.map((e) => {
                var k = show.indexOf(e);
                return <CatFact key={k} data={e} num={num} liked={liked} setLiked={setLiked}></CatFact>;
            })}
        </div>
    );
}

export default CatFactList;