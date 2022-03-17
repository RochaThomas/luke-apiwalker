import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const DispPerson = (props) => {
    const response = props.response;
    const setResponse = props.setResponse;
    const {searchID} = useParams();
    const history = useHistory();

    const [homePlanet, setHomePlanet] = useState({});

    useEffect(() => {
        console.log("USEEFFECT RAN!!!!");
        axios.get('https://swapi.dev/api/people/'+searchID)
    .then(res => {
        setResponse(res.data);
    })
    .catch(err => {
        history.push(`/error`);
    })},
    [searchID]);
    
    //put second use effect in first in a .then
    useEffect(() => {
        console.log(response.homeworld);
        axios.get(response.homeworld)
    .then(res => {
        setHomePlanet(res.data);
    })
    .catch(err => console.log("Home Planet Wasn't Retrieved"))},
    [searchID]);

    // const checkOutHomePlanet = () => {
    //     console.log("history.push somehow");
    // };

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
            <div className="keyAndValue" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <h3>Home Planet: </h3>
                <p id='homeworld'>{homePlanet.name}</p>
            </div>
            {/* <div className="keyAndValue" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <h3>Check Out {response.name}'s Home Planet: </h3>
                <a href='' onClick={checkOutHomePlanet}>Click Here to View Home Planet</a>
            </div> */}
        </div>
    )
}
export default DispPerson;