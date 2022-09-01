import React from "react"

function AppMem() {


    const [starWarsData, setStarWarsData] = React.useState({});
    const [count, setCount] = React.useState(1);

    console.log("Rendereed")


    React.useEffect(()=>{
        fetch(`https://swapi.dev/api/people/${count}`)
            .then((res)=>{
                return res.json();
            }).then((data)=>{
                setStarWarsData(data)
            })
    }, [count])


    

    return (
        <div> 
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(s => s + 1)}>Add</button>
        </div>

        
    )

}

export default AppMem