import { useEffect, useState } from 'react';
import { LockKeyhole, Mail, ShieldCheck } from 'lucide-react';
import { API_BASE_URL, AUTH_TOKEN_KEY } from './config';

export default function AdminLogin() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(AUTH_TOKEN_KEY)) {
      window.location.href = '/admin/dashboard';
    }
  }, []);

  const handleChange = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
    setError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.message || 'Login failed.');
      }

      localStorage.setItem(AUTH_TOKEN_KEY, payload.token);
      localStorage.setItem('olaosebikan_admin_user', JSON.stringify(payload.user));
      window.location.href = '/admin/dashboard';
    } catch (loginError) {
      setError(loginError.message || 'Unable to login. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-stone-50 px-4 py-10 text-gray-900">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center justify-center">
        <section className="grid w-full overflow-hidden rounded-lg bg-white shadow-xl shadow-orange-900/10 lg:grid-cols-[1fr_0.9fr]">
          <div className="hidden bg-orange-500 p-10 text-white lg:flex lg:flex-col lg:justify-between">
            <div>
              <div className="mb-8 grid h-14 w-14 place-items-center rounded-lg bg-white text-xl font-black text-orange-500">
                OB
              </div>
              <h1 className="max-w-md text-4xl font-black leading-tight">
                Olaosebikan Bread owner access
              </h1>
              <p className="mt-4 max-w-md text-base font-semibold text-orange-50">
                Manage bread products, orders, stock levels, and daily sales from one protected dashboard.
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm font-bold text-orange-50">
              <ShieldCheck size={20} />
              Secured with admin email, password, and JWT authentication.
            </div>
          </div>

          <div className="p-6 sm:p-10">
            <button
              type="button"
              onClick={() => {
                window.location.href = '/';
              }}
              className="mb-10 text-sm font-extrabold text-orange-600 hover:text-orange-700"
            >
              Back to website
            </button>

            <div className="mb-8">
              <h2 className="text-3xl font-black text-gray-950">Owner Login</h2>
              <p className="mt-2 text-sm font-semibold text-gray-500">
                Enter the registered Gmail and password to continue.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm font-extrabold text-gray-700">Gmail</span>
                <span className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 focus-within:border-orange-500">
                  <Mail size={20} className="text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-transparent text-base font-semibold outline-none"
                    placeholder="your-email@gmail.com"
                    autoComplete="email"
                    required
                  />
                </span>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-extrabold text-gray-700">Password</span>
                <span className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 focus-within:border-orange-500">
                  <LockKeyhole size={20} className="text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    className="w-full bg-transparent text-base font-semibold outline-none"
                    placeholder="Enter owner password"
                    autoComplete="current-password"
                    required
                  />
                </span>
              </label>

              {error && (
                <p className="rounded-lg bg-red-50 px-4 py-3 text-sm font-bold text-red-600">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-lg bg-orange-500 px-5 py-3 font-black text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? 'Checking...' : 'Login'}
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
