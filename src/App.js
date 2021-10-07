import { React } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ToggleContainer from './containers/ToggleContainer';
import ReferenceContainer from './containers/ReferenceContainer';
import ReducerContainer from './containers/ReducerContainer';
import Stopwatch from './containers/Stopwatch';
import MyUseStateContainer from './containers/MyUseStateContainer';
import SettingsContainer from './containers/SettingsContainer';
import MemoContainer from './containers/MemoContainer';
import AsyncContainer from './containers/AsyncContainer';

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column m-2">
        <h3>Hooks and custom hooks examples</h3>
        <div className="d-flex flex-column">
          <Link to='/'>Home</Link>
          <Link to='/refExample'>useRef example</Link>
          <Link to='/reducerExample'>useReducer example</Link>
          <Link to='/stopwatch'>Stopwatch example</Link>
          <Link to='/toggle'>Toggle example (custom hook)</Link>
          <Link to='/counter'>Counter example (custom hook, wrapper for useReducer)</Link>
          <Link to='/settings'>Settings example (usage of hook useImperativeHandle)</Link>
          <Link to='/memoCompare'>UseMemoCompare example (custom hook, custom compare action)</Link>
          <Link to='/asyncExample'>UseAsync example (custom hook for sending async request)</Link>
        </div>
        <hr />
        <Route exact path='/toggle' component={ToggleContainer}></Route>
        <Route exact path='/refExample' component={ReferenceContainer}></Route>
        <Route exact path='/reducerExample' component={ReducerContainer}></Route>
        <Route exact path='/stopwatch' component={Stopwatch}></Route>
        <Route exact path='/counter' component={MyUseStateContainer}></Route>
        <Route exact path='/settings' component={SettingsContainer}></Route>
        <Route exact path='/asyncExample' component={AsyncContainer}></Route>
      </div>
    </Router>
  );
}

export default App;
