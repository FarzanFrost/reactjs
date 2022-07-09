import React,{useState} from 'react'

function HeroForm(){
    const [name,setName] = useState('')
    const [comic,setComic] = useState('')
    return(

        <div className="d-flex justify-content-center p-3" style={ { background : "teal"} }>

            <form className="col-md-4" action="">

                <div className="form-group">

                    <h5>SuperHero</h5>
                    <input value={name} className="form-control" type="text"
                           placeholder="Enter SuperHero" onChange={ (e) => setName( e.target.value )}/>

                </div>

                <div className="form-group">

                    <h5>Comic</h5>
                    <input value={comic} className="form-control" type="text"
                           placeholder="Enter Comic" onChange={ (e) => setComic( e.target.value )}/>

                </div>

                <button type="submit" className="btn btn-primary m-2"> Submit </button>

            </form>

        </div>

    )

}

export default HeroForm