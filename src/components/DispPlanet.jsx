import React, {useEffect} from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const DispPlanet = (props) => {
    const response = props.response;
    const setResponse = props.setResponse;
    const {searchID} = useParams();
    const history = useHistory();
    useEffect(() => {
        console.log("USEEFFECT RAN!!!!");
        axios.get('https://swapi.dev/api/planets/'+searchID)
    .then(res => {
        setResponse(res.data);
    })
    .catch(err => {
        history.push(`/error`);
    })},
    [searchID]);

    return (
        <div>
            <h2>{response.name}</h2>
            <div className="keyAndValue" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <h3>Climate: </h3>
                <p id='climate'>{response.climate}</p>
            </div>
            <div className="keyAndValue" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <h3>Terrain: </h3>
                <p id='terrain'>{response.terrain}</p>
            </div>
            <div className="keyAndValue" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <h3>Surface Water: </h3>
                <p id='surface_water'>{response.surface_water ?
                'true':
                'false'}</p>
            </div>
            <div className="keyAndValue" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <h3>Population: </h3>
                <p id='population'>{response.population}</p>
            </div>
        </div>
    );
}

export default DispPlanet;