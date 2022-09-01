import React from "react"

function CountApp() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(0)
    
    
    

    React.useEffect(()=>{
        console.log("Fetching Data")
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [count])

    // React.useEffect(()=>{
    //     console.log("Effect Ran") 
    // }, [count])

    console.log("App Renered")
    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(s => s + 1)}>Add</button>
        </div>
    )
}

export default CountApp