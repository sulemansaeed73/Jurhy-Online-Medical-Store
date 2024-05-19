import React from "react";
import { AiFillStar, AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { BsFilterLeft, BsFillCartPlusFill } from "react-icons/bs";
const ProductCard = ({ product }) => {
  return (
    // main div
    <div className="border-[1px]  p-3 ">
      <div className=" h-[200px] text-center p-5 relative flex justify-center items-center group">
        {/* image */}
        <img src={product.thumbnail} className="h-[150px]" />
        {/* side icons div */}
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
      {/* name and price */}
      <p className="text-[16px] font-[400] text-[#103178] ">{product.title}</p>
      <p className="text-[16px] font-[400] text-[#103178] pt-[10px]">
        $ {product.price}
      </p>
      {/* star div */}
      <div className="flex pt-[7px] pb-[20px]">
        <AiFillStar className="text-[#FF9923]" />
        <AiFillStar className="text-[#FF9923]" />
        <AiFillStar className="text-[#FF9923]" />
        <AiFillStar className="text-[#FF9923]" />
        <AiFillStar className="text-[#FF9923]" />
      </div>
    </div>
  );
};

export default ProductCard;
