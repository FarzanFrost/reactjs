import React,{useContext , useState} from 'react'
import { HeroContext } from "./HeroContext";

function HeroForm(){
    const [name,setName] = useState('')
    const [comic,setComic] = useState('')
    const{ addHero } = useContext( HeroContext )
    const handleSubmit = ( e ) => {
        e.preventDefault() //prevent the browser from reloading
        addHero( name , comic )
        setName( '' )
        setComic( '' )

    }

    return(

        <div className="d-flex justify-content-center p-3" style={ { background : "teal"} }>

            <form className="col-md-4" onSubmit={ handleSubmit }>

                <div className="form-group">

                    <h5>SuperHero</h5>
                    <input
                        value={name}
                        className="form-control"
                        type="text"
                        placeholder="Enter SuperHero"
                        onChange={ (e) => setName( e.target.value )}
                        required
                    />

                </div>

                <div className="form-group">

                    <h5>Comic</h5>
                    <input
                        value={comic}
                        className="form-control"
                        type="text"
                        placeholder="Enter Comic"
                        onChange={ (e) => setComic( e.target.value )}
                        required
                    />

                </div>

                <button
                    type="submit"
                    className="btn btn-primary mt-2">
                    Submit </button>

            </form>

        </div>

    )

}

export default HeroForm