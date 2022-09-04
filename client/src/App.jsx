import CallPage from './routes/call/call.route';
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home/home.component';
import StartCall from './components/startcall.component';
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/startcall' element={<StartCall />} />
        <Route path='/joincall' element={<StartCall />} />
      </Routes>
    </div>
  );
}

export default App;
