import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';

function App() {
  return (
    <Router>
      <Route>
        <Route path='/' exact component={Home} />
        <Route path='/booking' component={Booking} />
      </Route>
    </Router>
  );
}

export default App;
