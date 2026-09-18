import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ className = '' }: { className?: string }) {
  // Target date: Saturday, September 26, 2026 at 18:00 WAT (or recurring next cycle)
  const calculateTimeLeft = (): TimeLeft => {
    // Standard target or dynamic next cohort
    const targetDate = new Date('2026-09-26T18:00:00+01:00');
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    // Fallback: 2 days, 14 hours, 32 mins rolling countdown for continuous conversion
    const cycleMs = 3 * 24 * 60 * 60 * 1000;
    const rem = cycleMs - (now.getTime() % cycleMs);
    return {
      days: Math.floor(rem / (1000 * 60 * 60 * 24)),
      hours: Math.floor((rem / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((rem / 1000 / 60) % 60),
      seconds: Math.floor((rem / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div id="countdown-timer" className={`flex items-center justify-center gap-2 sm:gap-4 ${className}`}>
      {timeUnits.map((unit, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div className="flex h-14 w-14 sm:h-18 sm:w-18 items-center justify-center rounded-xl bg-slate-800/90 border border-amber-500/30 text-2xl sm:text-3xl font-black text-amber-400 shadow-lg shadow-black/40">
            {String(unit.value).padStart(2, '0')}
          </div>
          <span className="mt-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
