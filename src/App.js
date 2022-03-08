import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import NavBar from './NavBar';
import { fetchItems, addItem as addItemApi} from './Api';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [menu, setMenu] =useState({
    snacks: [],
    drinks: []
  });

  useEffect(() => {
    async function getAllItems() {
      const snacks = await fetchItems("snacks");
      const drinks = await fetchItems("drinks");
      setMenu({ drinks, snacks })
      setIsLoading(false);
    }

    getAllItems();
  }, []);

  let { snacks, drinks } = menu;

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home snacks={snacks} drinks={drinks} />
        </Route>

        <Route exact path="/snacks">
          <Menu items={drinks} title="Snacks" />
        </Route>

        <Route exact path="/drinks">
          <Menu items={drinks} title="Drinks" />
        </Route>

      </Switch>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
