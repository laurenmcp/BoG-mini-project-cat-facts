import { useEffect, useState } from "react"

export default function CatFact(props) {
    //Destructure data from the props

    const { data, num} = props;

    return (
            <div className="catFact"> 
                <p>{data.fact}</p>
                <button>LIKE</button>
            </div>

    )
}
