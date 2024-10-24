import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../commons/api/axiosInstance';

export default function MainPage() {
  const [recommendations, setRecommendations] = useState([]);

  // 서버로부터 데이터 로드
  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await api.get('/pm/recommend/');
        if (response.data.recommendations) {
          setRecommendations(response.data.recommendations);
        } else {
          console.error('Invalid data structure:', response.data);
        }
      } catch (error) {
        console.error('Error fetching recommendations:', error);
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
  if (!items || items.length === 0) {
    return (
      <div className="w-full max-w-screen-xl mb-16 text-center">
        <h2 className="text-3xl font-bold mb-4">{title.headline1}</h2>
        <p className="text-lg">추천 상품이 없습니다.</p>
      </div>
    );
  }

  function highlightMainKeyword(headline, mainKeyword) {
    const parts = headline.split(mainKeyword); // 메인 키워드를 기준으로 분리
  
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

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 flex flex-col justify-between hover:shadow-lg transition-shadow"
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

            {/* 가격을 항상 하단에 위치시키기 */}
            <div className="productPrice text-red-500 text-center mt-auto">
              {item.originalPrice.toLocaleString()}원
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}