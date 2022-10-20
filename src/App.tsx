import React from 'react';
import MainRoutes from './Routes'
import Sidebar from './components/Sidebar'
import './setting.css'
import './styles.css'
import './login.css'

function App() {
  return (
    <div className="app">


     {/** Inner container */}
    <MainRoutes/>
    
    </div>
  );
}

export default App;
