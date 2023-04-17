import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import data from './data';
import './styles/App.css';

import Header from './components/Header';
import Home from './routes/Home';
import Destination from './routes/Destination';
import Crew from './routes/Crew';
import Technology from './routes/Technology';
import NotFound from './routes/NotFound';

const useWindowWidth = () => {
  const [ innerWidth, setInnerWidth ] = useState(undefined);
  const [ screenWidth, setScreenWidth ] = useState(undefined);

  useEffect(() => {
      const handleResize = () => {
        setInnerWidth(window.innerWidth);
        setScreenWidth(window.screen.width);
      }

      window.addEventListener('resize', handleResize);
      handleResize();

      return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { innerWidth, screenWidth };
}


const App = () => {
  const destinations = data.destinations;
  const crew = data.crew;
  const technology = data.technology;

  const width = useWindowWidth();

  return (
    <BrowserRouter>
        <Header width={width} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/destination' element={<Destination destinations={destinations} />} />
          <Route path='/crew' element={<Crew crew={crew} />} />
          <Route path='/technology' element={<Technology techs={technology} width={width} />} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
