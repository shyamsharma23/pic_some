import './App.css';
import Header from './components/Header'
import {Switch, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Header />
      <Switch>
          <Route exact path="/">
            <Photos />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
