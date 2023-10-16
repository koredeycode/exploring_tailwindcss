import React, { useState, useEffect } from 'react';
import {
  Home,
  Friends,
  Messages,
  Notifications,
  Videos,
  Marketplace,
} from './pages';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return isLoading ? (
    <div className="h-screen w-screen flex justify-center items-center font-extrabold text-cyan-600 text-4xl">
      <div className="rounded-full w-20 h-20 shadow-lg flex justify-center items-center font-extrabold text-cyan-600 text-4xl">
        f
      </div>
    </div>
  ) : (
    <div className="bg-gray-400 relative max-w-3xl mx-auto">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/marketplace" element={<Marketplace />} />
      </Routes>
    </div>
  );
}

export default App;
