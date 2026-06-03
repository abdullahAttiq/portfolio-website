import { useState, useEffect } from 'react';

export function useClock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    function tick() {
      const d = new Date();
      const opts = { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'UTC' };
      setTime(d.toLocaleTimeString('en-GB', opts) + ' UTC');
    }
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  return time;
}
