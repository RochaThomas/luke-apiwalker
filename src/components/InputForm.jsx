import React from 'react';
import { useHistory } from 'react-router-dom';

const InputForm = (props) => {

    const setSearchType = props.setSearchType;
    const setSearchID = props.setSearchID;
    const searchType = props.searchType;
    const searchID = props.searchID;
    const history = useHistory();

    const handleRequestClick = (e) => {
        e.preventDefault();
        history.push(`/${searchType}/${searchID}`);
    }

    const handleTypeChange = (e) => {
        setSearchType(e.target.value);
    }

    const handleIDChange = (e) => {
        setSearchID(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleRequestClick}>
                <h3>Search For... </h3>
                <select name="searchType" id="searchType" onChange={(e) => handleTypeChange(e)}>
                    <option value="people">people</option>
                    <option value="planets">planets</option>
                </select>
                <input type="number" name="searchID" id="searchID" min={1}  onChange={(e) => handleIDChange(e)}/>
                <button>Request Data</button>
            </form>
        </div>
    )
}

export default InputForm;