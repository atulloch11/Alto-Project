import './App.css';
import { Switch, Route } from 'react-router-dom';
import Page1 from './pages/Page1/Page1.js';
import Page2 from './pages/Page2/Page2.js';
import Page3 from './pages/Page3/Page3.js';
import Page4 from './pages/Page4/Page4.js';
import Navbar from './components/Navbar';

function App() {
  return (
    <Switch>
    <div className="App">
    <Navbar />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/page3" component={Page3} />
        <Route path="/page4" component={Page4} />
    </div>
    </Switch>
  );
}

export default App;
