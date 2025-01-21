"use client";

import { fetchProductsData } from "@/redux/slices/productSlice";
import { Star, StarHalf } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductDetail = () => {
  const { data, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);

  useEffect(() => {
    console.log("Redux Data:::::", data);
  }, [data]);

  return (
    <div className="flex gap-12 justify-between ">
      <div className="bg-[#0a4275] rounded-xl border border-blue-400">
        <img
          src={data?.products?.[0]?.images[0]}
          alt="product-image"
          className="max-w-[500px] "
        />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl ">{data?.products?.[0]?.title}</h1>
        <p>{data?.products?.[0]?.description}</p>
        <div className="flex gap-4">
          <p className="text-[#c3c333]">#{data?.products?.[0]?.category}</p>
          <p className="text-[#c3c333]">#{data?.products?.[0]?.brand}</p>
        </div>
        <p className="text-[#a48e92]">SKU: {data?.products?.[0]?.sku}</p>
        <div className="flex gap-4 items-center">
          <div>Rating: {data?.products?.[0]?.rating}</div>
          <div className="flex gap-1 items-center">
            <Star size={18} color="yellow" />
            <Star size={18} color="yellow" />
            <Star size={18} color="yellow" />
            <StarHalf size={18} color="yellow" />
            <Star size={18} />
          </div>
        </div>
        <p className="text-2xl text-[#c9d0c9]">
          Price: {data?.products?.[0]?.price}
        </p>
        <div>Discount: {data?.products?.[0]?.discountPercentage}%</div>
      </div>
    </div>
  );
};

export default ProductDetail;
