import React , { useContext } from 'react'
import { HeroContext } from "./HeroContext";

const design = {

    background : "black",
    height : "60px",
    color : "white",
    display : "flex",
    justifyContent : "space-around"

}
function Nav(){
    const { heroes } = useContext( HeroContext )
    return (

        <div style={ design }>

            <h2> Superheroes</h2>
            <h2>List of heroes : { heroes.length }</h2>

        </div>

    )

}

export default Nav;