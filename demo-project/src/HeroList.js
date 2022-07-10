import React , { useContext } from 'react'
import { HeroContext } from "./HeroContext";

function HeroList(){
    const { heroes } = useContext( HeroContext )
    return heroes.length ? (

        <div>

            <h2 className="text-white p-2"> Super Heroes : </h2>
            { heroes.map(

                hero => (

                    <div className="mt-3">

                        <h4> SuperHero : { hero.name } </h4>
                        <h4> Comic : { hero.comic } </h4>
                        <hr/>

                    </div>

                )

            )}

        </div>

    ) : (

        <div>

            <h2 className="text-white p-2">

                Super Heroes are not available

            </h2>

        </div>

    )

}

export default HeroList