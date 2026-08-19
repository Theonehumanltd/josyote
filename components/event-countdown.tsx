"use client";

import { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: string; // ISO date string
  eventName: string;
}

function getTimeLeft(target: Date) {
  const now = new Date();
  const diff = target.getTime() - now.getTime();

  if (diff <= 0) return null;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-display text-5xl tabular-nums sm:text-7xl">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-2 text-[10px] uppercase tracking-[0.25em] text-cream/40">
        {label}
      </span>
    </div>
  );
}

export function EventCountdown({ targetDate, eventName }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(new Date(targetDate)));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(new Date(targetDate)));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return (
      <div className="text-center">
        <p className="font-display text-3xl italic sm:text-4xl">{eventName}</p>
        <p className="mt-4 text-sm uppercase tracking-[0.2em] text-cream/50">
          Happening now
        </p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-cream/40">
        Next event
      </p>
      <p className="mt-3 font-display text-2xl italic sm:text-3xl">
        {eventName}
      </p>
      <div className="mt-8 flex justify-center gap-6 sm:gap-10">
        <TimeUnit value={timeLeft.days} label="Days" />
        <span className="pt-2 font-display text-4xl text-cream/20 sm:text-6xl">:</span>
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <span className="pt-2 font-display text-4xl text-cream/20 sm:text-6xl">:</span>
        <TimeUnit value={timeLeft.minutes} label="Mins" />
        <span className="pt-2 font-display text-4xl text-cream/20 sm:text-6xl">:</span>
        <TimeUnit value={timeLeft.seconds} label="Secs" />
      </div>
    </div>
  );
}
