"use client";
import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { BsFilterLeft, BsFillCartPlusFill } from "react-icons/bs";
import Container from "../layout_components/Container";
import Link from "next/link";
const FeaturedProducts = ({ products }) => {
  return (
    <div className=" py-10">
      <Container>
        <div className="xl:mx-4 ">
          <h3 className="text-[30px] text-[#103178] font-[600] my-[20px] text-center">
            Featured Products
          </h3>
          <div className="grid grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4  xl:grid xl:grid-cols-5">
            {/* mapping */}
            {products?.products?.slice(0, 10).map((product, i) => (
              // card
              <Link href={`/${product?.id}`}>
                <div className="border-[1px] p-3">
                  <div className="h-[200px] text-center p-5 relative flex justify-center items-center group">
                    <img src={product.thumbnail} className="h-[150px]" />
                    <div className="md:group-hover:opacity-100 absolute right-0 space-y-3 opacity-0 transition-opacity ease-in duration-500 top-0">
                      <div className="p-2 bg-[#f0f2f5] rounded-[15px] hover:bg-[#ff9923] transition ease-in duration-500 text-[16px] text-[#103179]">
                        <AiOutlineHeart />
                      </div>
                      <div className="p-2 bg-[#f0f2f5] rounded-[15px] hover:bg-[#ff9923] transition ease-in duration-500 text-[16px] text-[#103179]">
                        <BsFilterLeft />
                      </div>
                      <div className="p-2 bg-[#f0f2f5] rounded-[15px] hover:bg-[#ff9923] transition ease-in duration-500 text-[16px] text-[#103179]">
                        <AiOutlineSearch />
                      </div>
                      <div className="p-2 bg-[#f0f2f5] rounded-[15px] hover:bg-[#ff9923] transition ease-in duration-500 text-[16px] text-[#103179]">
                        <BsFillCartPlusFill />
                      </div>
                    </div>
                  </div>
                  <p className="text-[16px] font-[400] text-[#103178] truncate">
                    {product.title}
                  </p>
                  <p className="text-[16px] font-[400] text-[#103178] pt-[10px]">
                    $ {product.price}
                  </p>
                  <div className="flex pt-[7px] pb-[20px]">
                    <AiFillStar className="text-[#FF9923]" />
                    <AiFillStar className="text-[#FF9923]" />
                    <AiFillStar className="text-[#FF9923]" />
                    <AiFillStar className="text-[#FF9923]" />
                    <AiFillStar className="text-[#FF9923]" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FeaturedProducts;
