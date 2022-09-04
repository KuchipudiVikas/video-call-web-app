import CallPage from './routes/call/call.route';
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home/home.component';
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/call' element={<CallPage />} />
      </Routes>
    </div>
  );
}

export default App;
