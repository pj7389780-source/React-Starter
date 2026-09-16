import React, { useContext } from "react";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { MyStore } from "../Context/MyStore";

const Cart = () => {
  const {cartItems,setCartItems } = useContext(MyStore);

  const cartRemove = (id)=>{
        let products = cartItems.filter((elem) => elem.id !== id);
        setCartItems(products)
  }

  const subtotal = cartItems.reduce((total, item) => {
    return total + item.price;
  }, 0);
  const shipping = subtotal > 100 ? 0 : 0;
  const total = subtotal + shipping;
  return (
    <div className="min-h-screen bg-slate-50 px-6 py-10">
      {" "}
      {/* Heading */}{" "}
      <div className="mx-auto mb-8 max-w-6xl">
        {" "}
        <h1 className="text-3xl font-bold text-slate-900"> Your Cart </h1>{" "}
        <p className="mt-1 text-sm text-slate-500">
          {" "}
          {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your cart{" "}
        </p>{" "}
      </div>{" "}
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
        {" "}
        {/* Cart Items */}{" "}
        <div className="space-y-4 lg:col-span-2">
          {" "}
          {cartItems.length === 0 ? (
            <div className="flex min-h flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white">
              {" "}
              <ShoppingBag size={55} className="mb-4 text-slate-300" />{" "}
              <h2 className="text-xl font-semibold text-slate-800">
                {" "}
                Your cart is empty{" "}
              </h2>{" "}
              <p className="mt-1 text-sm text-slate-500">
                {" "}
                Add some products to see them here.{" "}
              </p>{" "}
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                {" "}
                {/* Image */}{" "}
                <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-xl bg-slate-100 p-4">
                  {" "}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain"
                  />{" "}
                </div>{" "}
                {/* Details */}{" "}
                <div className="flex flex-1 flex-col justify-between">
                  {" "}
                  <div className="flex justify-between gap-4">
                    {" "}
                    <div>
                      {" "}
                      <p className="mb-1 text-xs font-medium uppercase text-slate-400">
                        {" "}
                        {item.category}{" "}
                      </p>{" "}
                      <h2 className="line-clamp-2 text-lg font-semibold text-slate-900">
                        {" "}
                        {item.title}{" "}
                      </h2>{" "}
                    </div>{" "}
                    {/* Delete */}{" "}
                    <button
                    onClick={()=>cartRemove(item.id)}
                     className="cursor-pointer text-slate-400 transition hover:text-red-500">
                      {" "}
                      <Trash2 size={19} />{" "}
                    </button>{" "}
                  </div>{" "}
                  {/* Bottom */}{" "}
                  <div className="mt-4 flex items-center justify-between">
                    {" "}
                    {/* Quantity */}{" "}
                    <div className="flex items-center rounded-lg border border-slate-200">
                      {" "}
                      <button className="cursor-pointer p-2 hover:bg-slate-100">
                        {" "}
                        <Minus size={16} />{" "}
                      </button>{" "}
                      <span className="px-3 text-sm font-semibold"> 1 </span>{" "}
                      <button className="cursor-pointer p-2 hover:bg-slate-100">
                        {" "}
                        <Plus size={16} />{" "}
                      </button>{" "}
                    </div>{" "}
                    {/* Price */}{" "}
                    <p className="text-xl font-bold text-slate-900">
                      {" "}
                      ${item.price.toFixed(2)}{" "}
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            ))
          )}{" "}
        </div>{" "}
        {/* Order Summary */}{" "}
        <div className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          {" "}
          <h2 className="text-xl font-bold text-slate-900">
            {" "}
            Order Summary{" "}
          </h2>{" "}
          <div className="my-6 space-y-4 text-sm">
            {" "}
            <div className="flex justify-between">
              {" "}
              <span className="text-slate-500"> Items </span>{" "}
              <span className="font-medium"> {cartItems.length} </span>{" "}
            </div>{" "}
            <div className="flex justify-between">
              {" "}
              <span className="text-slate-500"> Subtotal </span>{" "}
              <span className="font-medium"> ${subtotal.toFixed(2)} </span>{" "}
            </div>{" "}
            <div className="flex justify-between">
              {" "}
              <span className="text-slate-500"> Shipping </span>{" "}
              <span className="font-medium">
                {" "}
                {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}{" "}
              </span>{" "}
            </div>{" "}
          </div>{" "}
          <div className="border-t border-slate-200 pt-5">
            {" "}
            <div className="flex items-center justify-between">
              {" "}
              <span className="text-lg font-semibold"> Total </span>{" "}
              <span className="text-2xl font-bold text-slate-900">
                {" "}
                ${total.toFixed(2)}{" "}
              </span>{" "}
            </div>{" "}
            <button className="mt-6 w-full cursor-pointer rounded-xl bg-black py-3.5 font-semibold text-white transition hover:bg-slate-800 active:scale-[0.98]">
              {" "}
              Checkout{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default Cart;
