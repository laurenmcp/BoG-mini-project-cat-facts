function GetFactButton(props) {
        const { numFacts, setNum } = props; 
    return (
        <button onClick = {setNum(numFacts + 1)}>GET FACT</button>
    )
}

export default GetFactButton;