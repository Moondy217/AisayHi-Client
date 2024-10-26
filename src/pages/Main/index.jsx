import useRecommendations from '../../hooks/useRecommendations';
import Section from '../Main/components/recommend/Section';
import Arrow from '../Main/components/recommend/Arrow';
import MainBanner1 from '../../commons/assets/Banner/MainBanner1.svg';
import MainBanner2 from '../../commons/assets/Banner/MainBanner2.svg';
import MainBanner3 from '../../commons/assets/Banner/MainBanner3.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MainPage() {
  const { recommendations, error } = useRecommendations();

  // 배너 슬라이더 설정
  const bannerSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3초마다 전환
    arrows: true, // 커스텀 화살표 사용
    nextArrow: <Arrow direction="right" />, // 오른쪽 화살표
    prevArrow: <Arrow direction="left" />, // 왼쪽 화살표
  };

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  return (
    <div className="relative flex flex-col items-center w-full min-h-screen">
      {/* 상단 배너 슬라이더 */}
      <div className="w-full max-w-screen-xl mb-8">
        <Slider {...bannerSettings}>
          <div>
            <img src={MainBanner1} alt="Main Banner 1" className="w-full h-auto" />
          </div>
          <div>
            <img src={MainBanner2} alt="Main Banner 2" className="w-full h-auto" />
          </div>
        </Slider>
      </div>


      {/* 추천 섹션 */}
      {recommendations.map((section, index) => (
        <div key={index}>
          {index === 2 && ( // 탕비실 섹션 3 위에 배너 3 삽입
            <div className="w-full max-w-screen-xl mt-20 mb-8">
              <img src={MainBanner3} alt="Main Banner 3" className="w-full h-auto" />
            </div>
          )}
          <Section
            title={{
              headline1: section.headline1,
              headline2: section.headline2,
              mainKeyword: section.mainKeyword,
            }}
            items={section.recommendations}
          />
        </div>
      ))}
    </div>
  );
}

export default MainPage;