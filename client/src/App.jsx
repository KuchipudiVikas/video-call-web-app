import Call from './routes/call/call.route';
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home/home.component';
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/call' element={<Call />} />
      </Routes>
    </div>
  );
}

export default App;
