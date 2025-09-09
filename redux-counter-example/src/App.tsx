
import { useAppSelector, useAppDispatch } from './redux/store';
import { increment, decrement, reset, incrementByAmount } from './redux/counterSlice';
import { useState } from 'react';

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState<number>(0);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const handleIncrementByAmount = () => {
    if (incrementAmount > 0) {
      dispatch(incrementByAmount(incrementAmount));
      setIncrementAmount(0);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-sans bg-gray-100">
      <h1 className="text-gray-800 mb-8 text-2xl font-bold">
        Redux Counter Uygulaması
      </h1>
      
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full mx-4">
        <h2 className="text-5xl mb-8 text-slate-700 font-bold">
          {count}
        </h2>
        
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <button 
            onClick={handleIncrement}
            className="px-5 py-2 text-base w-18 bg-green-500 text-white border-none rounded cursor-pointer hover:bg-green-600 transition-colors"
          >
            +1
          </button>
          
          <button 
            onClick={handleDecrement}
            disabled={count === 0}
            className={`px-5 py-2 text-base w-18 text-white border-none rounded transition-colors ${
              count === 0 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-red-500 cursor-pointer hover:bg-red-600'
            }`}
          >
            -1
          </button>

          <button 
            onClick={() => dispatch(incrementByAmount(5))}
            className="px-5 py-2 text-base w-18 bg-pink-500 text-white border-none rounded cursor-pointer hover:bg-green-600 transition-colors"
          >
            5 ekle
          </button>
          
          <button 
            onClick={() => dispatch(incrementByAmount(10))}
            className="px-5 py-2 text-base w-18 bg-yellow-500 text-white border-none rounded cursor-pointer hover:bg-green-600 transition-colors"
          >
            10 ekle
          </button>
          
          <button 
            onClick={handleReset}
            className="px-5 py-2 text-base  w-18 bg-orange-500 text-white border-none rounded cursor-pointer hover:bg-orange-600 transition-colors"
          >
            Reset
          </button>
        </div>
        
        <div className="flex flex-wrap gap-2 items-center justify-center">
          <input
            type="number"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(Number(e.target.value))}
            placeholder="Miktar girin"
            className="px-2 py-2 text-base border border-gray-300 rounded w-30 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            onClick={handleIncrementByAmount}
            disabled={incrementAmount <= 0}
            className={`px-4 py-2 text-base text-white border-none rounded transition-colors ${
              incrementAmount <= 0 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-500 cursor-pointer hover:bg-blue-600'
            }`}
          >
            Ekle
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
