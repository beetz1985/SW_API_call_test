//Use of dependency array to prevent repeated renders of component


import React from "react";

function App() {


    const [starWarsData, setStarWarsData] = React.useState({});

    console.log("Component Rendered");


    React.useEffect(()=>{
        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(data => setStarWarsData(data))        
    }, [])




    return(
        <div> 
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}

export default App