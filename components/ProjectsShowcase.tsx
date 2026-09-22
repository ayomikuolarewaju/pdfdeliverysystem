import React, { useState, useEffect } from 'react';
import { Terminal, CheckCircle2, CloudSun, Trash2, Plus, ExternalLink, Sparkles } from 'lucide-react';
import { CAPSTONE_PROJECTS } from '../data/bookContent';

export const ProjectsShowcase: React.FC = () => {
  // --- PROJECT 2 INTERACTIVE TO-DO STATE (from Page 64-66) ---
  const [todos, setTodos] = useState<{ id: number; text: string; done: boolean }[]>([
    { id: 1, text: 'Read Part 01: How the Web Works', done: true },
    { id: 2, text: 'Master CSS Box Model & Flexbox', done: true },
    { id: 3, text: 'Build To-Do List with localStorage', done: false },
    { id: 4, text: 'Fetch live weather from Open-Meteo API', done: false },
  ]);
  const [newTodoText, setNewTodoText] = useState('');

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodoText.trim()) return;
    setTodos([...todos, { id: Date.now(), text: newTodoText.trim(), done: false }]);
    setNewTodoText('');
  };

  const handleToggleTodo = (id: number) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  // --- PROJECT 3 INTERACTIVE WEATHER STATE (from Page 67-68) ---
  const cities: Record<string, { name: string; lat: number; lon: number }> = {
    lagos: { name: 'Lagos', lat: 6.5244, lon: 3.3792 },
    london: { name: 'London', lat: 51.5072, lon: -0.1276 },
    newyork: { name: 'New York', lat: 40.7128, lon: -74.006 },
    tokyo: { name: 'Tokyo', lat: 35.6762, lon: 139.6503 },
  };

  const [selectedCity, setSelectedCity] = useState('lagos');
  const [weatherData, setWeatherData] = useState<{ temp: number; wind: number; unit: string } | null>(null);
  const [weatherLoading, setWeatherLoading] = useState(false);
  const [weatherError, setWeatherError] = useState<string | null>(null);

  const fetchWeather = async (cityKey: string) => {
    const city = cities[cityKey];
    if (!city) return;
    setWeatherLoading(true);
    setWeatherError(null);
    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current=temperature_2m,wind_speed_10m`;
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      const data = await res.json();
      setWeatherData({
        temp: data.current.temperature_2m,
        wind: data.current.wind_speed_10m,
        unit: data.current_units.temperature_2m || '°C',
      });
    } catch (e: any) {
      setWeatherError('Failed to load weather from Open-Meteo');
    } finally {
      setWeatherLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(selectedCity);
  }, [selectedCity]);

  return (
    <section id="projects" className="py-20 bg-[#0b0f19] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Terminal className="w-3.5 h-3.5" />
            <span>Part 08 Portfolio Capstones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Build 3 Real Projects That Work
          </h2>
          <p className="text-base text-slate-400">
            No toy snippets or incomplete exercises. The book ends with three full-featured projects you build from scratch, complete with CSS architecture, responsive layout, and live API communication.
          </p>
        </div>

        {/* 3 Projects Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* PROJECT 1: Profile Page */}
          <div className="rounded-2xl bg-[#0f172a] border border-slate-800 flex flex-col justify-between overflow-hidden shadow-xl hover:border-slate-700 transition-all">
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                  Part 08 · Page 61
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                  Zero JS Needed
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Project 1: Developer Profile Page
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                A responsive portfolio utilizing semantic HTML5 tags, CSS custom properties (<code className="text-cyan-300">:root</code>), modern CSS Grid, and place-items centering.
              </p>

              {/* Skills learned */}
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Responsive card grid without media queries</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Gradient headers & avatar circle centering</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Card lift hover transitions (<code className="text-slate-300">translateY</code>)</span>
                </li>
              </ul>
            </div>

            {/* Live Visual Preview matching Page 61-63 */}
            <div className="p-4 bg-slate-950/80 border-t border-slate-800">
              <div className="text-[10px] font-mono text-slate-500 mb-2 uppercase">Live Output:</div>
              <div className="rounded-xl overflow-hidden border border-slate-700/60 bg-[#0f172a] text-center shadow-lg">
                <div className="py-4 px-3 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white space-y-1">
                  <div className="w-10 h-10 mx-auto rounded-full bg-white text-indigo-600 font-bold flex items-center justify-center text-sm shadow-md">
                    YN
                  </div>
                  <div className="text-xs font-bold">Your Name</div>
                  <div className="text-[10px] text-indigo-100">Student · Future Web Developer</div>
                </div>
                <div className="p-3 grid grid-cols-3 gap-1.5 text-[10px]">
                  <div className="p-1.5 rounded bg-slate-900 border border-slate-800 font-medium text-slate-300 hover:-translate-y-0.5 transition-transform">
                    HTML5
                  </div>
                  <div className="p-1.5 rounded bg-slate-900 border border-slate-800 font-medium text-slate-300 hover:-translate-y-0.5 transition-transform">
                    CSS Grid
                  </div>
                  <div className="p-1.5 rounded bg-slate-900 border border-slate-800 font-medium text-slate-300 hover:-translate-y-0.5 transition-transform">
                    Variables
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PROJECT 2: Persistent To-Do App */}
          <div className="rounded-2xl bg-[#0f172a] border border-slate-800 flex flex-col justify-between overflow-hidden shadow-xl hover:border-slate-700 transition-all">
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold">
                  Part 08 · Page 64
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800">
                  State & LocalStorage
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Project 2: Persistent To-Do App
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                A state-driven task manager using event delegation, array manipulation (<code className="text-indigo-300">filter</code>, <code className="text-indigo-300">find</code>), and browser localStorage synchronization.
              </p>

              {/* Skills learned */}
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>State-driven architecture: array is the single truth</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>Event delegation with <code className="text-slate-300">closest('li')</code></span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>JSON persistence in <code className="text-slate-300">localStorage</code></span>
                </li>
              </ul>
            </div>

            {/* Live Working Interactive To-Do List */}
            <div className="p-4 bg-slate-950/80 border-t border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-500 uppercase">Live Interactive App:</span>
                <span className="text-[10px] font-mono text-indigo-400">
                  {todos.filter((t) => !t.done).length} active tasks
                </span>
              </div>

              {/* Add form */}
              <form onSubmit={handleAddTodo} className="flex gap-1.5">
                <input
                  type="text"
                  value={newTodoText}
                  onChange={(e) => setNewTodoText(e.target.value)}
                  placeholder="What needs doing?"
                  className="flex-1 px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs font-mono focus:outline-none focus:border-indigo-500"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3 h-3" /> Add
                </button>
              </form>

              {/* To-Do Items List */}
              <div className="max-h-36 overflow-y-auto space-y-1 pr-1">
                {todos.map((t) => (
                  <div
                    key={t.id}
                    className="flex items-center justify-between p-1.5 rounded bg-slate-900/90 border border-slate-800 text-xs"
                  >
                    <span
                      onClick={() => handleToggleTodo(t.id)}
                      className={`cursor-pointer truncate flex-1 ${
                        t.done ? 'line-through text-slate-500' : 'text-slate-200'
                      }`}
                    >
                      {t.text}
                    </span>
                    <button
                      onClick={() => handleDeleteTodo(t.id)}
                      className="text-slate-500 hover:text-rose-400 p-1 cursor-pointer"
                      title="Delete task"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* PROJECT 3: Live Weather Dashboard */}
          <div className="rounded-2xl bg-[#0f172a] border border-slate-800 flex flex-col justify-between overflow-hidden shadow-xl hover:border-slate-700 transition-all">
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold">
                  Part 08 · Page 67
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800">
                  Live API & async/await
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Project 3: Live Weather Board
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connects directly to the real Open-Meteo REST API using <code className="text-amber-300">fetch()</code> and <code className="text-amber-300">async/await</code>, with zero API keys required and built-in error states.
              </p>

              {/* Skills learned */}
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Real asynchronous HTTP requests with <code className="text-slate-300">fetch()</code></span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Checking <code className="text-slate-300">if (!res.ok)</code> and loading states</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Accessible status notifications with <code className="text-slate-300">role="status"</code></span>
                </li>
              </ul>
            </div>

            {/* Live Real Open-Meteo API Runner */}
            <div className="p-4 bg-slate-950/80 border-t border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-500 uppercase">Live Open-Meteo API:</span>
                <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Real endpoint</span>
                </div>
              </div>

              {/* City selector */}
              <div className="flex items-center gap-2">
                <label htmlFor="city-select" className="text-xs font-mono text-slate-400">
                  City:
                </label>
                <select
                  id="city-select"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="flex-1 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs font-mono focus:outline-none focus:border-amber-500"
                >
                  <option value="lagos">Lagos, Nigeria</option>
                  <option value="london">London, UK</option>
                  <option value="newyork">New York, USA</option>
                  <option value="tokyo">Tokyo, Japan</option>
                </select>
              </div>

              {/* Weather result */}
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CloudSun className="w-5 h-5 text-amber-400" />
                  <div>
                    <div className="text-xs font-bold text-white">
                      {cities[selectedCity]?.name}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {weatherLoading
                        ? 'Fetching from API...'
                        : weatherData
                        ? `Wind: ${weatherData.wind} km/h`
                        : 'No data'}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  {weatherLoading ? (
                    <div className="w-4 h-4 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
                  ) : weatherData ? (
                    <div className="text-base font-extrabold font-mono text-amber-300">
                      {weatherData.temp}
                      {weatherData.unit}
                    </div>
                  ) : (
                    <span className="text-xs text-rose-400">Error</span>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
