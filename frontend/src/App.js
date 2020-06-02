import React, {useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import axiosClient from './config/axios';

import Patient from './components/Patient';
import NewDating from './components/NewDating'
import Dating from './components/Dating'


function App() {

  const [datings, saveDatings] = useState([]);
  const [queries, saveQueries] = useState(true);

  useEffect( () => {
    if (queries) {
      const askAPI = () => {
        axiosClient.get('/patients')
          .then( res => {
            saveDatings(res.data);
            saveQueries(false);
          })
          .catch( err => {
            console.log(err);
          })
      }
      askAPI();
    }
  }, [queries])

  return (
    <Router>
      <Switch>
        <Route 
          exact path="/"
          component={() => <Patient datings={datings}/>}
        />

        <Route 
          exact path="/new"
          component={() => <NewDating saveQueries={saveQueries}/>}
        />

        <Route 
          exact path="/dating/:id"
          render={(props) =>{
            const d = datings.filter(d => d._id === props.match.params.id);
            return(
              <Dating dating={d[0]}
              saveQueries={saveQueries}/>
            )
          }}
        />

      </Switch>
    </Router>
  );
}

export default App;
