import React from 'react'
import './App.css';
import Header from './containers/Header';
import RoomDesign from './View/RoomDesign'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSelector } from 'react-redux';


function App() {

  const data = useSelector((state) => {
    return state.data
  })

  return (
    <div className="App">
      <Header />
      <section className='view '>
        <div >
          <h5>Living Room Design</h5>
          <RoomDesign Data={data} />
        </div>
      </section>
    </div>
  );
}

export default App;
