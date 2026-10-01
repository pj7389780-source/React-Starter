import React from "react";
import {
  ArrowUpRight,
  ShoppingBag,
  Users,
  Package,
  DollarSign,
  Activity,
  Zap,
  TrendingUp,
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-zinc-950 p-6 text-white md:p-8">

      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-950 to-lime-950/30 p-8 md:p-10">
        
        {/* Glow */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-lime-400/10 blur-3xl" />

        <div className="relative max-w-3xl">
          <div className="mb-5 flex items-center gap-2 text-sm font-medium text-lime-400">
            <Zap className="h-4 w-4" />
            <span>ADMIN CONTROL CENTER</span>
          </div>

          <h1 className="text-4xl font-black tracking-tight md:text-6xl">
            Run your store.
            <br />
            <span className="text-lime-400">Your way.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400">
            Monitor users, products and store activity from one powerful
            dashboard.
          </p>

          <button className="mt-7 flex items-center gap-2 rounded-xl bg-lime-400 px-5 py-3 font-semibold text-black transition hover:bg-lime-300">
            View Products
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
          <div className="flex items-center justify-between">
            <div className="rounded-xl bg-lime-400/10 p-3">
              <Users className="h-5 w-5 text-lime-400" />
            </div>

            <span className="flex items-center gap-1 text-xs text-lime-400">
              <TrendingUp className="h-3 w-3" />
              +12%
            </span>
          </div>

          <p className="mt-5 text-sm text-zinc-500">Total Users</p>
          <h2 className="mt-1 text-3xl font-bold">2,481</h2>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
          <div className="flex items-center justify-between">
            <div className="rounded-xl bg-blue-400/10 p-3">
              <Package className="h-5 w-5 text-blue-400" />
            </div>

            <span className="text-xs text-zinc-500">Live</span>
          </div>

          <p className="mt-5 text-sm text-zinc-500">Products</p>
          <h2 className="mt-1 text-3xl font-bold">342</h2>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
          <div className="flex items-center justify-between">
            <div className="rounded-xl bg-purple-400/10 p-3">
              <ShoppingBag className="h-5 w-5 text-purple-400" />
            </div>

            <span className="text-xs text-lime-400">+8.4%</span>
          </div>

          <p className="mt-5 text-sm text-zinc-500">Orders</p>
          <h2 className="mt-1 text-3xl font-bold">1,892</h2>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
          <div className="flex items-center justify-between">
            <div className="rounded-xl bg-yellow-400/10 p-3">
              <DollarSign className="h-5 w-5 text-yellow-400" />
            </div>

            <span className="text-xs text-lime-400">+18.2%</span>
          </div>

          <p className="mt-5 text-sm text-zinc-500">Revenue</p>
          <h2 className="mt-1 text-3xl font-bold">$48.2K</h2>
        </div>

      </section>

      {/* Bottom Section */}
      <section className="mt-6 grid gap-6 lg:grid-cols-3">

        {/* Activity */}
        <div className="lg:col-span-2 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">

          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">Recent Activity</h2>
              <p className="mt-1 text-sm text-zinc-500">
                What's happening in your store
              </p>
            </div>

            <Activity className="h-5 w-5 text-lime-400" />
          </div>

          <div className="mt-6 space-y-4">

            <div className="flex items-center gap-4 rounded-xl bg-zinc-950 p-4">
              <div className="h-2 w-2 rounded-full bg-lime-400" />
              <div className="flex-1">
                <p className="text-sm font-medium">
                  New user registered
                </p>
                <p className="text-xs text-zinc-500">
                  john_doe joined SkyMART
                </p>
              </div>
              <span className="text-xs text-zinc-600">2m ago</span>
            </div>

            <div className="flex items-center gap-4 rounded-xl bg-zinc-950 p-4">
              <div className="h-2 w-2 rounded-full bg-blue-400" />
              <div className="flex-1">
                <p className="text-sm font-medium">
                  Product added
                </p>
                <p className="text-xs text-zinc-500">
                  Wireless Headphones
                </p>
              </div>
              <span className="text-xs text-zinc-600">18m ago</span>
            </div>

            <div className="flex items-center gap-4 rounded-xl bg-zinc-950 p-4">
              <div className="h-2 w-2 rounded-full bg-purple-400" />
              <div className="flex-1">
                <p className="text-sm font-medium">
                  Order completed
                </p>
                <p className="text-xs text-zinc-500">
                  Order #SKY-1842
                </p>
              </div>
              <span className="text-xs text-zinc-600">42m ago</span>
            </div>

          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">

          <h2 className="text-xl font-bold">Quick Actions</h2>
          <p className="mt-1 text-sm text-zinc-500">
            Jump straight into management
          </p>

          <div className="mt-6 space-y-3">

            <button className="group flex w-full items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-left transition hover:border-lime-400/40 hover:bg-zinc-900">
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-lime-400" />
                <span className="font-medium">Manage Users</span>
              </div>

              <ArrowUpRight className="h-4 w-4 text-zinc-600 transition group-hover:text-lime-400" />
            </button>

            <button className="group flex w-full items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-left transition hover:border-lime-400/40 hover:bg-zinc-900">
              <div className="flex items-center gap-3">
                <Package className="h-5 w-5 text-lime-400" />
                <span className="font-medium">Manage Products</span>
              </div>

              <ArrowUpRight className="h-4 w-4 text-zinc-600 transition group-hover:text-lime-400" />
            </button>

            <button className="group flex w-full items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-left transition hover:border-lime-400/40 hover:bg-zinc-900">
              <div className="flex items-center gap-3">
                <ShoppingBag className="h-5 w-5 text-lime-400" />
                <span className="font-medium">View Orders</span>
              </div>

              <ArrowUpRight className="h-4 w-4 text-zinc-600 transition group-hover:text-lime-400" />
            </button>

          </div>
        </div>

      </section>
    </div>
  );
};

export default Home;