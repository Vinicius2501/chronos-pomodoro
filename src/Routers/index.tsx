import { BrowserRouter, Route, Routes, useLocation } from 'react-router';
import { Home } from '../pages/Home';
import { AboutPomodor } from '../pages/AboutPomodoro';
import { NotFound } from '../pages/NotFound';
import { useEffect } from 'react';
import { History } from '../pages/History';
import { Settings } from '../pages/Settings';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
  return null;
}

export function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/history/' element={<History />} />
        <Route path='/settings/' element={<Settings />} />
        <Route path='/about-pomodoro/' element={<AboutPomodor />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}
