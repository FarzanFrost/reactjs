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

    const addHero = ( name , comic ) => {

        setHeroes( [ ...heroes , { name , comic }] )

    }

    return (

        <HeroContext.Provider value={{heroes , addHero}}>

            { props.children }

        </HeroContext.Provider>

    )

}

export default HeroContextProvider