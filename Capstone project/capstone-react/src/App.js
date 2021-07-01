import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Router>
         <div className="router">
           <Switch>
             <Route path="/" exact component = {}></Route>
             <Route path="" component = {}> </Route>
             <Route path="" component = {}> </Route>
             <Route path="" component = {}> </Route>
             <Route path="" component = {}> </Route>
             <Route path="" component = {}> </Route>
           </Switch>
         </div>
       </Router>
    </div>
  );
}

export default App;
