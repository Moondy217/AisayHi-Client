import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'; // Slider import 유지
import PropTypes from 'prop-types';
import api from '../../commons/api/axiosInstance';

// 커스텀 화살표 컴포넌트
function Arrow({ className, style, onClick, direction }) {
  return (
    <div
      className={`${className} absolute top-1/2 transform -translate-y-1/2 cursor-pointer text-3xl ${
        direction === 'left' ? 'left-4' : 'right-4'
      } text-blue-500 z-10`}
      onClick={onClick}
      style={{ ...style }}
    >
      {direction === 'left' ? '⬅️' : '➡️'}
    </div>
  );
}

Arrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  direction: PropTypes.oneOf(['left', 'right']),
};

// MainPage 컴포넌트
function MainPage() {
  const [recommendations, setRecommendations] = useState([]);

  // 서버에서 추천 데이터 가져오기
  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await api.get('/pm/recommend/');
        if (response.data.recommendations) {
          setRecommendations(response.data.recommendations);
        } else {
          console.error('잘못된 데이터 구조:', response.data);
        }
      } catch (error) {
        console.error('추천 데이터를 가져오는 중 오류 발생:', error);
      }
    };

    fetchRecommendations();
  }, []);

  return (
    <div className="relative flex flex-col items-center w-full min-h-screen">
      {recommendations.map((section, index) => (
        <Section
          key={index}
          title={{
            headline1: section.headline1,
            headline2: section.headline2,
            mainKeyword: section.mainKeyword,
          }}
          items={section.recommendations}
        />
      ))}
    </div>
  );
}

// 추천 섹션 컴포넌트
function Section({ title, items }) {
  const settings = {
    dots: false, // 네비게이션 점 제거
    infinite: false, // 반복하지 않음
    speed: 500, // 전환 속도
    slidesToShow: 4, // 한 번에 4개씩 표시
    slidesToScroll: 4, // 한 번에 4개씩 스크롤
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  function highlightMainKeyword(headline, mainKeyword) {
    const parts = headline.split(mainKeyword);
    return (
      <>
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            {part}
            {index < parts.length - 1 && (
              <span className="font-bold">{mainKeyword}</span>
            )}
          </React.Fragment>
        ))}
      </>
    );
  }

  if (!items || items.length === 0) {
    return (
      <div className="w-full max-w-screen-xl mb-16 text-center">
        <h2 className="text-3xl font-bold mb-4">{title.headline1}</h2>
        <p className="text-lg">추천 상품이 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="recoSection w-full max-w-screen-xl mb-16">
      {/* 헤드라인 1 문구 */}
      <p className="text-[34px] font-normal text-[#6A90F2] mb-4">
        {title.headline1}
      </p>
  
      {/* 헤드라인 2 문구 */}
      <p className="text-[40px] text-[#000000] mb-2">
        {highlightMainKeyword(title.headline2, title.mainKeyword)}
      </p>
  
      {/* Slider 적용 */}
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="p-4">
            <div
              className="w-[300px] h-[565px] border rounded-[14px] p-4 flex flex-col justify-between 
                        hover:shadow-lg transition-shadow h-full"
            >
              <Link to={`/product/${item.goodsName}`} className="flex-grow">
                <img
                  src={item.goodsImg}
                  alt={item.goodsName}
                  className="w-full h-64 object-cover rounded-md mb-4"
                />
                <div className="productName text-[18px] font-semibold mb-2 text-center">
                  {item.goodsName}
                </div>
              </Link>
  
              {/* 가격 하단 배치 */}
              <div className="productPrice text-red-500 text-center mt-auto">
                {item.originalPrice.toLocaleString()}원
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}  

// PropTypes 선언
Section.propTypes = {
  title: PropTypes.shape({
    headline1: PropTypes.string.isRequired,
    headline2: PropTypes.string.isRequired,
    mainKeyword: PropTypes.string.isRequired,
  }).isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      goodsName: PropTypes.string.isRequired,
      goodsImg: PropTypes.string.isRequired,
      originalPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default MainPage;
