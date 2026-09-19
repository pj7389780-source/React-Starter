import React from "react";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router";

const CheckOut = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-[75vh] items-center justify-center px-5">
      <div className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-xl">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <CheckCircle size={48} className="text-green-600" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900">Thank You!</h1>

        <p className="mt-3 text-gray-500">
          Your order has been placed successfully.
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-8 w-full rounded-xl bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-800 active:scale-95"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
