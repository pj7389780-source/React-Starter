import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import {
  Heart,
  ShoppingCart,
  Star,
  Truck,
  ShieldCheck,
  RotateCcw,
  ArrowLeft,
} from "lucide-react";

const ProductDetails = () => {
    const [singleData, setSingleData] = useState({})
    const { id } = useParams()
    const getSingleData = async ()=>{
        try{
            let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setSingleData(res.data)
        }
        catch(error){
            console.log("something mess up ",error)
        }
    }
    useEffect(()=>{
        getSingleData()
    },[])
    const navigate = useNavigate()
  return (
    <main className="h-[80%] bg-[#f6f7f9] px-4 py-6 sm:px-6 lg:px-10">
      <button
        onClick={() => navigate("/")}
        className="mb-5 flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-gray-900"
      >
        <ArrowLeft size={18} />
        Back to products
      </button>

      {/* Main Product */}
      <section className="mx-auto grid min-h-[calc(100vh-120px)] max-w-7xl overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-xl lg:grid-cols-2">
        {/* ================= IMAGE ================= */}
        <div className="relative flex min-h-[500px] items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-indigo-50 p-8 sm:p-12 lg:min-h-full">
          {/* Decorative glow */}
          <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl" />

          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-purple-200/30 blur-3xl" />

          {/* Category */}
          <span className="absolute left-7 top-7 rounded-full bg-black px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
            {singleData.category}
          </span>

          {/* Wishlist */}
          <button className="absolute right-7 top-7 flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-700 shadow-lg transition hover:bg-black hover:text-white">
            <Heart size={20} />
          </button>

          {/* Product Image */}
          <img
            src={singleData.image}
            alt={singleData.title}
            className="relative z-10 max-h-[520px] w-[80%] object-contain drop-shadow-2xl transition duration-500 hover:scale-105"
          />

          {/* Product ID */}
          <span className="absolute bottom-7 left-7 text-xs font-medium text-gray-400">
            PRODUCT #{singleData.id}
          </span>
        </div>

        {/* ================= DETAILS ================= */}
        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
          {/* Small label */}
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
            Premium Collection
          </p>

          {/* Title */}
          <h1 className="max-w-2xl text-3xl font-black leading-tight tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
            {singleData.title}
          </h1>

          {/* Rating */}
          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-full bg-yellow-50 px-4 py-2">
              <Star size={18} fill="currentColor" className="text-yellow-500" />

              <span className="font-bold text-gray-900">
                {singleData.rating?.rate}
              </span>
            </div>

            <span className="text-sm text-gray-400">
              {singleData.rating?.count} reviews
            </span>
          </div>

          {/* Divider */}
          <div className="my-7 h-px bg-gray-200" />

          {/* Description */}
          <p className="max-w-xl text-base leading-8 text-gray-500">
            {singleData.description}
          </p>

          {/* Price */}
          <div className="mt-8 flex items-end gap-3">
            <span className="text-4xl font-black text-gray-950">
              ${singleData.price}
            </span>

            <span className="mb-1 text-sm text-gray-400">
              Inclusive of all taxes
            </span>
          </div>

          {/* Stock */}
          <div className="mt-3 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500" />

            <span className="text-sm font-semibold text-green-600">
              In stock
            </span>

            <span className="text-sm text-gray-400">· Ready to ship</span>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button className="flex h-14 flex-1 items-center justify-center gap-3 rounded-xl bg-black px-6 font-bold text-white transition-all duration-300 hover:bg-indigo-600 active:scale-[0.98]">
              <ShoppingCart size={20} />
              Add to Cart
            </button>

            <button className="flex h-14 items-center justify-center rounded-xl border border-gray-300 px-6 font-bold text-gray-900 transition hover:border-black hover:bg-gray-50">
              Buy Now
            </button>
          </div>

          {/* Benefits */}
          <div className="mt-10 grid grid-cols-1 gap-4 border-t border-gray-200 pt-7 sm:grid-cols-3">
            {/* Shipping */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                <Truck size={18} />
              </div>

              <div>
                <p className="text-sm font-bold text-gray-900">Free Shipping</p>

                <p className="text-xs text-gray-400">Fast delivery</p>
              </div>
            </div>

            {/* Security */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600">
                <ShieldCheck size={18} />
              </div>

              <div>
                <p className="text-sm font-bold text-gray-900">
                  Secure Payment
                </p>

                <p className="text-xs text-gray-400">100% protected</p>
              </div>
            </div>

            {/* Returns */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-600">
                <RotateCcw size={18} />
              </div>

              <div>
                <p className="text-sm font-bold text-gray-900">Easy Returns</p>

                <p className="text-xs text-gray-400">30 day returns</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductDetails
