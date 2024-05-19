"use client";
import React, { useState } from "react";
import { AiFillStar, AiOutlineTwitter } from "react-icons/ai";
import {
  BiLogoFacebook,
  BiLogoPinterestAlt,
  BiLogoLinkedin,
} from "react-icons/bi";
import { BsCircleFill } from "react-icons/bs";
import { FaRedditAlien } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
const SingleProduct1 = ({ products }) => {
  const [value, setValue] = useState(1);

  const handleAdd = () => {
    if (value < 10000) {
      setValue(value + 1);
    }
  };

  const handleSubtract = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };
  return (
    <div>
      <div className="lg:mt-10">
        <p className="text-[12px] bg-[#12a05c] text-[white] font-[600] w-[160px] text-center rounded-[10px]">
          Only {products?.stock} left in stock
        </p>
        <div className="text-[#103178] my-6">
          <p className="text-[12px] text-[#5b6c8f] md:text-[14px]">No brand</p>
          <p className="text-[24px] font-[600] lg:text-[30px] lg:font-[600]">
            {products?.title}
          </p>
          <div className="flex gap-4">
            <div className="flex pt-[7px]">
              <AiFillStar className="text-[#FF9923]" />
              <AiFillStar className="text-[#FF9923]" />
              <AiFillStar className="text-[#FF9923]" />
              <AiFillStar className="text-[#FF9923]" />
              <AiFillStar className="text-[#FF9923]" />
            </div>
            <p className="text-[14px] font-[400] mt-1">(1 review)</p>
          </div>
        </div>
        <hr />
        <div className=" text-[#103178] text-[14px] font-[600] my-6">
          <div className="flex items-center ">
            <TiTick className="text-[#12a05c]" />
            <p>Study history upto 30 days</p>
          </div>
          <div className="flex items-center ">
            <TiTick className="text-[#12a05c]" />
            <p>Upto 5 users Simultaneously</p>
          </div>
          <div className="flex items-center ">
            <TiTick className="text-[#12a05c]" />
            <p>use HEALTH certificate</p>
          </div>
        </div>
        <hr />
        <div className="text-[#103178] font-[600] md:my-4 lg:text-[30px] lg:font-[600]">
          <p>$ {products?.price}</p>
          <div className="flex items-center text-[16px] gap-3">
            <p>Color:</p>
            <div className="flex gap-2">
              <BsCircleFill className="text-[#103178]" />
              <BsCircleFill className="text-[#5B6C8F]" />
              <BsCircleFill className="text-[#ff9923]" />
            </div>
          </div>
          <div className="flex text-[14px] gap-4 items-center my-3">
            <p>Sizes: </p>
            <div className="flex gap-2">
              <button className="p-1 border-[1px] rounded-[20px] px-3">
                Small
              </button>
              <button className="p-1 border-[1px] rounded-[20px] px-3">
                Medium
              </button>
              <button className="p-1 border-[1px] rounded-[20px] px-3">
                Large
              </button>
            </div>
          </div>

          <div>
            <p className="text-[14px]">Quantity</p>
            <div className="flex gap-3">
              <div className="flex items-center gap-2 bg-[#f0f2f5] rounded-[40px] px-2 ">
                <button
                  onClick={handleSubtract}
                  className="text-[24px] text-[#c6cfe1]"
                >
                  -
                </button>
                <input
                  type="number"
                  min={1}
                  max={10000}
                  value={value}
                  readOnly
                  className="text-center bg-[#f0f2f5] text-[black] md:px-28 lg:px-0 lg:text-[24px]"
                />
                <button
                  onClick={handleAdd}
                  className="text-[22px] text-[#c6cfe1]"
                >
                  +
                </button>
              </div>
              <button className="bg-[#ff9923] text-[white] p-2 rounded-[30px] text-[16px] font-[500] px-8 md:px-32 lg:px-8">
                Add to cart
              </button>
            </div>
            <div className="flex text-[14px] gap-5 my-5">
              <p className=" underline hover:text-[#ff9923]">Add to wishlist</p>
              <p className=" underline hover:text-[#ff9923]">Add to compare</p>
            </div>
          </div>
        </div>

        <hr />

        <div className="text-[#103178] text-[16px] my-4">
          <div className="flex gap-4">
            <p className="font-[600]">Tags: </p>
            <p className="text-[#5b6c85]">Thermometer, Health</p>
          </div>
          <div className="flex gap-5">
            <p className="font-[600]">SKU: </p>
            <p className="font-[500]">AU110876</p>
          </div>
          <div className="flex gap-2">
            <BiLogoFacebook className=" bg-[#3B5998] text-[white] text-[24px] p-1 rounded-[4px]" />
            <AiOutlineTwitter className=" bg-[#55ACEE] text-[white] text-[24px] p-1 rounded-[4px]" />
            <BiLogoPinterestAlt className=" bg-[#CB2027] text-[white] text-[24px] p-1 rounded-[4px]" />
            <BiLogoLinkedin className=" bg-[#176DBA] text-[white] text-[24px] p-1 rounded-[4px]" />
            <FaRedditAlien className=" bg-[#F84301] text-[white] text-[24px] p-1 rounded-[4px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct1;
