import React from 'react'

const design = {

    background : "black",
    height : "60px",
    color : "white",
    display : "flex",
    justifyContent : "space-around"

}
function Nav(){

    return (

        <div style={ design }>

            <h2> Superheroes</h2>
            <h2>List of heroes : 15</h2>

        </div>

    )

}

export default Nav;