import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillStar, AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { BsFilterLeft, BsFillCartPlusFill } from "react-icons/bs";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
const Category2 = ({ products }) => {
  return (
    <>
      {/* swiper start */}
      <Swiper
        // swiper navigation
        navigation={true}
        modules={[Pagination, Navigation]}
        // breakpoints
        breakpoints={{
          375: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1366: {
            slidesPerView: 5,
          },
          1440: {
            slidesPerView: 5,
          },
        }}
      >
        {products?.products?.map((product, i) => (
          <SwiperSlide className="xl:border-[0px]">
            <Link href={`/${product?.id}`}>
              {/* main div */}
              <div className="border-[1px] p-3">
                {/* image and it's icon div */}
                <div className="h-[200px] text-center p-5 relative flex justify-center items-center group">
                  {/* image */}
                  <img src={product.thumbnail} className="h-[120px]" />
                  {/* icons div */}
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
                {/* title */}
                <p className="text-[16px] font-[400] text-[#103178] truncate">
                  {product.title}
                </p>
                {/* price */}
                <p className="text-[16px] font-[400] text-[#103178] pt-[10px]">
                  $ {product.price}
                </p>
                {/* rating star div */}
                <div className="flex pt-[7px] pb-[20px]">
                  <AiFillStar className="text-[#FF9923]" />
                  <AiFillStar className="text-[#FF9923]" />
                  <AiFillStar className="text-[#FF9923]" />
                  <AiFillStar className="text-[#FF9923]" />
                  <AiFillStar className="text-[#FF9923]" />
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Category2;
