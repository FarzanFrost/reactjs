import React,{ useState , createContext } from "react";

export const HeroContext = createContext(undefined)

function HeroContextProvider( props ){

    const [ heroes,setHeroes ] = useState([

        {

            name : "Flash" , comic : "DC"

        },
        {

            name : "Thor" , comic : "Marvel"

        }

    ])

    return (

        <HeroContext.Provider value={{heroes}}>

            { props.children }

        </HeroContext.Provider>

    )

}

export default HeroContextProvider