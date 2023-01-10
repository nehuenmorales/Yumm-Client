import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/home/home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
