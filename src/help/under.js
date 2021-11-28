import React from "react"


function Und(){
    return(
        <div className="under">
            <h2 className="h2" >do you like this project?</h2>
            <button className="btn" onClick = { function(){alert("thank you")} }>yes</button>
            <button className="btn" onClick = { function(){alert("WTF")} }>no</button>
        </div>
    )
}

export default Und