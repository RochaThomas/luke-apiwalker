import React, {useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DispPerson = (props) => {
    const response = props.response;
    const setResponse = props.setResponse;
    const {searchID} = useParams();
    useEffect(() => {
        axios.get('https://swapi.dev/api/people/'+searchID)
    .then(res => {
        setResponse(res.data);
    })
    .catch(err => console.log(err))},
    []);
    
    return (
        <div>
            <h2>{response.name}</h2>
            <div className="keyAndValue" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <h3>Height: </h3>
                <p id='height'>{response.height} cm</p>
            </div>
            <div className="keyAndValue" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <h3>Mass: </h3>
                <p id='mass'>{response.mass} kg</p>
            </div>
            <div className="keyAndValue" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <h3>Hair Color: </h3>
                <p id='hair_color'>{response.hair_color}</p>
            </div>
            <div className="keyAndValue" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <h3>Skin Color: </h3>
                <p id='skin_color'>{response.skin_color}</p>
            </div>
        </div>
    )
}
export default DispPerson;