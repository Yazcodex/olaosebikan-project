import { useEffect, useState } from 'react';
import { LogOut, Package, ShoppingBag, Users, Wallet } from 'lucide-react';
import { API_BASE_URL, AUTH_TOKEN_KEY } from './config';

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);

    if (!token) {
      window.location.href = '/admin/login';
      return;
    }

    fetch(`${API_BASE_URL}/dashboard/stats`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async (response) => {
        const payload = await response.json();
        if (!response.ok) throw new Error(payload.message || 'Unable to load dashboard.');
        setStats(payload.data);
      })
      .catch((dashboardError) => {
        setError(dashboardError.message);
        localStorage.removeItem(AUTH_TOKEN_KEY);
      });
  }, []);

  const logout = () => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem('olaosebikan_admin_user');
    window.location.href = '/admin/login';
  };

  if (error) {
    return (
      <main className="grid min-h-screen place-items-center bg-stone-50 px-4">
        <div className="max-w-md rounded-lg bg-white p-8 text-center shadow-lg">
          <h1 className="text-2xl font-black text-gray-950">Access expired</h1>
          <p className="mt-3 font-semibold text-gray-500">{error}</p>
          <button onClick={logout} className="mt-6 rounded-lg bg-orange-500 px-5 py-3 font-black text-white">
            Login again
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-stone-50 text-gray-900">
      <header className="border-b border-orange-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-orange-500">Olaosebikan Bread</p>
            <h1 className="text-2xl font-black text-gray-950">Owner Dashboard</h1>
          </div>
          <button
            type="button"
            onClick={logout}
            className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-black text-white hover:bg-gray-800"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {!stats ? (
          <p className="font-bold text-gray-500">Loading dashboard...</p>
        ) : (
          <>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard icon={<ShoppingBag />} label="Total Orders" value={stats.totalOrders} />
              <StatCard icon={<Package />} label="Orders Today" value={stats.ordersToday} />
              <StatCard icon={<Wallet />} label="Total Revenue" value={`₦${stats.totalRevenue.toLocaleString()}`} />
              <StatCard icon={<Users />} label="Total Customers" value={stats.totalCustomers} />
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <section className="rounded-lg bg-white p-5 shadow-sm">
                <h2 className="mb-4 text-lg font-black">Recent Orders</h2>
                <div className="space-y-3">
                  {stats.recentOrders.length === 0 ? (
                    <p className="font-semibold text-gray-500">No orders yet.</p>
                  ) : (
                    stats.recentOrders.map((order) => (
                      <div key={order._id} className="rounded-lg border border-gray-100 p-4">
                        <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-black">{order.customerName}</p>
                          <p className="text-sm font-semibold text-gray-500">{order.phoneNumber}</p>
                          <p className="mt-1 text-sm font-semibold text-gray-500">{order.deliveryAddress}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-black">₦{order.totalPrice.toLocaleString()}</p>
                          <p className="text-sm font-bold text-orange-600">{order.status}</p>
                        </div>
                        </div>
                        <div className="mt-3 rounded-lg bg-orange-50 px-3 py-2">
                          <p className="text-xs font-black uppercase tracking-widest text-orange-600">Order</p>
                          <p className="mt-1 text-sm font-bold text-gray-800">
                            {order.items.map((item) => `${item.quantity} x ${item.name}`).join(', ')}
                          </p>
                          {order.orderNote && (
                            <p className="mt-2 text-sm font-semibold text-gray-600">{order.orderNote}</p>
                          )}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </section>

              <section className="rounded-lg bg-white p-5 shadow-sm">
                <h2 className="mb-4 text-lg font-black">Inventory Alerts</h2>
                {stats.lowStockProducts.length === 0 ? (
                  <p className="font-semibold text-gray-500">All bread stock levels look good.</p>
                ) : (
                  <div className="space-y-3">
                    {stats.lowStockProducts.map((product) => (
                      <div key={product._id} className="rounded-lg bg-red-50 p-4">
                        <p className="font-black text-red-700">{product.name}</p>
                        <p className="text-sm font-semibold text-red-600">
                          {product.stockQuantity} left, threshold {product.lowStockThreshold}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-6 rounded-lg bg-orange-50 p-4">
                  <p className="text-sm font-extrabold text-orange-700">Most Ordered Bread</p>
                  <p className="mt-1 text-xl font-black text-gray-950">
                    {stats.mostOrderedBread?.name || 'No sales yet'}
                  </p>
                </div>
              </section>
            </div>
          </>
        )}
      </section>
    </main>
  );
}

function StatCard({ icon, label, value }) {
  return (
    <div className="rounded-lg bg-white p-5 shadow-sm">
      <div className="mb-4 grid h-11 w-11 place-items-center rounded-lg bg-orange-50 text-orange-600">
        {icon}
      </div>
      <p className="text-sm font-extrabold text-gray-500">{label}</p>
      <p className="mt-1 text-3xl font-black text-gray-950">{value}</p>
    </div>
  );
}
