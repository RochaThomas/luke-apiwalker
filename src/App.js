import React, {useState} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import InputForm from './components/InputForm';
import DispPerson from './components/DispPerson';
import DispPlanet from './components/DispPlanet';
import DispError from './components/DispError';

function App() {

  const [response, setResponse] =  useState({});
  const [searchType, setSearchType] = useState('people');
  const [searchID, setSearchID] = useState('1');

  return (
    <div className="App">
      <fieldset>
        <legend>InputForm.jsx</legend>
        <InputForm setSearchType={setSearchType} setSearchID={setSearchID} searchType={searchType} searchID={searchID}/>
      </fieldset>
      <fieldset>
        <legend>DispPerson.jsx</legend>
        <Switch>
          <Route path={'/people/:searchID'}>
            <DispPerson setResponse={setResponse} response={response}/>
          </Route>
          <Route path={'/planets/:searchID'}>
            <DispPlanet setResponse={setResponse} response={response}/>
          </Route>
          <Route path={'/error'}>
            <DispError/>
          </Route>
        </Switch>
      </fieldset>
    </div>
  );
}

export default App;
