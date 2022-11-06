import { useState } from "react";

function FeaturedFact(props) {

    const { data, num } = props;
    const uniqueId = "" + num;
      

    return (
        <div className="feature catFact">
            <h3>{data.fact}</h3>
            <div id={uniqueId}>LIKE</div>
        </div>
    )
}

export default FeaturedFact;