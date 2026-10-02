import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increament } from './features/CounterSlice'

const App = () => {
  let dispatch = useDispatch()
  console.log(dispatch)
  const data = useSelector((store)=>store.counter);
  return (
    <div className="mx-auto mt-24 flex w-[92%] max-w-sm flex-col items-center gap-8 rounded-2xl border border-white/10 bg-white/5 p-10 shadow-2xl shadow-black/50 backdrop-blur-xl">
      <h1 className="font-mono text-2xl font-bold tracking-tight text-zinc-100">
        Total Count is <span className="text-violet-400">{data.count}</span>
      </h1>

      <div className="flex w-full gap-3">
        <button
          className="flex-1 rounded-xl border border-white/10 bg-white/5 py-3 font-medium text-zinc-200 transition hover:-translate-y-0.5 hover:bg-white/10 active:translate-y-0 active:scale-95"
          onClick={() => dispatch(increament())}
        >
          Increament
        </button>
        <button
          className="flex-1 rounded-xl bg-violet-600 py-3 font-medium text-white shadow-lg shadow-violet-600/30 transition hover:-translate-y-0.5 hover:bg-violet-500 active:translate-y-0 active:scale-95"
          onClick={() => dispatch(decrement())}
        >
          Decreament
        </button>
      </div>
    </div>
  );
}

export default App
