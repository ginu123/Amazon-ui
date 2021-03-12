import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './pages/home';
function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <HomePage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
