import './App.css';
import { Home } from './components/pages/Home/Home';

import { Routes, Route } from 'react-router-dom';

import { AboutUS } from './components/pages/AboutUS/AboutUS';

import { ContactUS } from './components/pages/ContactUS/ContactUS';

import { ChangeColor } from './components/pages/ChangeColor/ChangeColor';

import { UseState } from './components/pages/UseState/UseState';

import { Tweets } from './components/pages/Tweets/tweets';

import { NotFound } from './components/pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path='/Home' element={<Home />} />
        {/* <Route path='/AboutUS' element={<AboutUS />} />
        <Route path='/contactUS' element={<ContactUS />} /> */}
        <Route path='/ChangeColor' element={<ChangeColor />} />
        <Route path='/UseState' element={<UseState />} />
        <Route path='/Tweets' element={<Tweets />} />
        {/* <Route path='*' element={< NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
