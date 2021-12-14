import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPositions } from '../services/positions.js';

import Create from "../screens/Create.jsx";
import Detail from "../screens/Detail.jsx";
import Edit from "../screens/Edit.jsx";
import Search from "../screens/Search.jsx";
import Splash from "../screens/Splash.jsx";

const Container = () => {
  const [positions, setPositions] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const [transitions, setTransitions] = useState([]);

  useEffect(() => {
    const positionFetch = async () => {
      const allPositions = await getPositions();
      setPositions(allPositions);
      console.log(positions);
    }
    positionFetch()
  }, [])

  return (
    <>
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/edit" component={Edit} />
      </Switch>
    </>
  )
}

export default Container