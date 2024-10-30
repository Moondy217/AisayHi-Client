import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Arrow from './Arrow';
import ProductCard from './ProductCard';

function Section({ title, items }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

   // 메인 키워드 강조 함수
   function highlightMainKeyword(headline, mainKeyword) {
    if (!headline.includes(mainKeyword)) return headline;
    const parts = headline.split(mainKeyword);
    return (
      <>
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            {part}
            {index < parts.length - 1 && (
              <span className="font-bold text-[#FF6347]">{mainKeyword}</span>
            )}
          </React.Fragment>
        ))}
      </>
    );
  }

  // 상품이 없을 때 처리
  if (!items || items.length === 0) {
    return (
      <div className="w-full max-w-screen-xl mb-16 text-center">
        <h2 className="text-3xl font-bold mb-4">{title.headline1}</h2>
        <p className="text-lg">추천 상품이 없습니다.</p>
      </div>
    );
  }

  // 상품 슬라이더와 섹션 렌더링
  return (
    <div className="recoSection w-full max-w-screen-xl mb-16 my-[150px]">
      <p className="text-[34px] font-normal text-[#6A90F2] mb-4">
        {title.headline1}
      </p>
      <p className="text-[40px] text-[#000000] mb-2">
        {highlightMainKeyword(title.headline2, title.mainKeyword)}
      </p>
      <Slider {...settings}>
        {items.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </Slider>
    </div>
  );
}

// PropTypes를 통한 타입 체크
Section.propTypes = {
  title: PropTypes.shape({
    headline1: PropTypes.string.isRequired,
    headline2: PropTypes.string.isRequired,
    mainKeyword: PropTypes.string.isRequired,
  }).isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      goodsKey: PropTypes.number.isRequired,
      goodsName: PropTypes.string.isRequired,
      goodsImg: PropTypes.string.isRequired,
      originalPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Section;