
import './App.css';
import Main from './Screens/Main/Main';
import {BrowserRouter,Redirect,Route,Switch} from 'react-router-dom';
import Question2 from './Screens/Question2/Question2';
function App() {
  return (
    <div className="App">
      <BrowserRouter>  
      <Switch>
        <Route exact={true} path="/" component={Main} />
        <Route path="/quest2" component={Question2}/>
        <Redirect to="/" />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
