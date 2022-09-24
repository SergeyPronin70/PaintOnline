import Canvas from './components/Canvas';
import Settingbar from './components/Settingbar';
import Toolbar from './components/Toolbar';
import './styles/app.scss'
import { Routes, Route, Navigate, Outlet, BrowserRouter } from 'react-router-dom'

function App() {
  return (

    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/:id' element={<><Toolbar /><Settingbar /><Canvas /></>} />
        <Route path='/' element={<><Toolbar /><Settingbar /><Canvas /><Navigate to={`f${(+new Date()).toString(16)}`} /></>} />
          
          </Routes>
          </BrowserRouter>
    </div>

  );
}

export default App;
