import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';

const Read = (props) => {

    const [places, setPlaces] = useState([]);
    const originalPlaces = props.data;

    useEffect(() =>{
        setPlaces(props.data);
    },[props])

    const searchLocation = (searchValue) => {
        if (searchValue !== ""){
            const filteredLocation = places.filter(place => place.City === searchValue);
            if (filteredLocation.length > 0){
                setPlaces(filteredLocation)
            }
        } else {
            setPlaces(originalPlaces)
        }

    }
    console.log(places)
    return(
        <div className="Read">
            <br/>
            <br/>
            
            <input
                className='citySearch'
                type = "text"
                placeholder='City you are in                          🔍'
                onChange={(e) => searchLocation(e.target.value)}
            />
            
            
            {
                places && places.length > 0 ?
                places.map((place) =>
                    <Card id = {place.id} name = {place.Name} location = {place.Location} description = {place.Description} Like = {place.Like} Dislike = {place.Dislike}/>
                ):<h2>{'No locations added Yet😞'}</h2>
            }
        </div>
    )
}

export default Read;