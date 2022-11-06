import CatFact from "./CatFact";

function CatFactList(props) {
    
    const { data, num, page} = props;

    console.log("CAT FACT LIST PROPS")
    console.log(props)

    var list = data;
    var min = 2 + ((page - 1) * 10);
    var max = 12 + ((page - 1) * 10);
    var show = list.slice(min, max);
    show = show.reverse();

    console.log("SHOW")
    console.log(show)
    

    //Map each element of the array into a CatFact Component
    return (
        <div>
            {show.map((e) => {
                let i = show.indexOf(e);
                return <CatFact data={e} num={num}></CatFact>;
            })}
        </div>
    );
}

export default CatFactList;