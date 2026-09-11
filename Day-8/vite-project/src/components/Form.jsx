import React, { useState } from 'react'
import {useForm} from "react-hook-form"

const Form = () => {
  const {register,reset,handleSubmit} = useForm();
  const formSubmit = (data)=>{
    console.log(data);
    
    reset()
  }
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10">
      <form
      onSubmit={handleSubmit(formSubmit)}
        className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl"
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Add Product</h1>

          <p className="text-slate-400 mt-2 text-sm">
            Add a new product to your store.
          </p>
        </div>

        <div className="mb-5">
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Product Name
          </label>

          <input
            {...register("Name")}
            type="text"
            placeholder="Enter product name"
            className="
            w-full px-4 py-3
            bg-slate-800/70
            border border-slate-700
            rounded-xl
            text-white
            placeholder:text-slate-500
            outline-none
          transition duration-200
          focus:border-indigo-500
          focus:ring-4
          focus:ring-indigo-500/10
          hover:border-slate-600
        "
          />
        </div>
        <div className="mb-5">
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Price
          </label>

          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              ₹
            </span>

            <input
              {...register("Price")}
              type="number"
              placeholder="Enter product price"
              className="
            w-full pl-9 pr-4 py-3.5
            bg-slate-800/70
            border border-slate-700
            rounded-xl
            text-white
            placeholder:text-slate-500
            outline-none
            transition duration-200
            focus:border-indigo-500
            focus:ring-4
            focus:ring-indigo-500/10
            hover:border-slate-600
            "
            />
          </div>
        </div>
        <div className="mb-5">
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Category
          </label>

          <select
            {...register("Category")}
            defaultValue=""
            className="
    w-full px-4 py-3.5
          bg-slate-800/70
          border border-slate-700
          rounded-xl
          text-white
          outline-none
          cursor-pointer
          transition duration-200
          focus:border-indigo-500
          focus:ring-4
          focus:ring-indigo-500/10
          hover:border-slate-600
          "
          >
            <option className="text-white" value="" disabled>
              Select the category
            </option>

            <option value="Men's">Men's</option>
            <option value="Women's">Women's</option>
            <option value="Kid's">Kid's</option>
          </select>
        </div>
        <div className="mb-7">
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Product Image
          </label>

          <input
            {...register("Image")}
            type="url"
            placeholder="https://example.com/image.jpg"
            className="
          w-full px-4 py-3.5
          bg-slate-800/70
          border border-slate-700
          rounded-xl
          text-white
          placeholder:text-slate-500
          outline-none
          transition duration-200
          focus:border-indigo-500
          focus:ring-4
          focus:ring-indigo-500/10
          hover:border-slate-600
        "
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="
        w-full py-3.5
        bg-indigo-600
        hover:bg-indigo-500
        active:scale-[0.98]
        rounded-xl
        text-white
        font-semibold
        shadow-lg
        shadow-indigo-600/20
        transition-all duration-200
        cursor-pointer
      "
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default Form
