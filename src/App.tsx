import React from 'react';

import './styles/main.scss';

import WeatherPage from './pages/WeatherPage/WeatherPage';

const App: React.FC = () => {

  return (
    <div className='app'>
      <WeatherPage />
    </div>
  )
}

export default App;