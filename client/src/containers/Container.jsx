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
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const positionFetch = async () => {
      const allPositions = await getPositions();
      setPositions(allPositions);
    }
    positionFetch()
  }, [])

  return (
    <>
      <Switch>
        <Route exact path="/" children={ <Splash 
          setSearchResults={setSearchResults} 
          positions={positions}
        /> } />
        <Route path="/search" children={ <Search 
          searchResults={searchResults}
          setSearchResults={setSearchResults}
          positions={positions}
        /> } />
        <Route path="/detail/:id" children={ <Detail 
          setSearchResults={setSearchResults}
          positions={positions}
        /> } />
        <Route path="/create" component={Create} />
        <Route path="/edit" component={Edit} />
      </Switch>
    </>
  )
}

export default Container