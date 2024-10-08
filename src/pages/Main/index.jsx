import '../../index.css';
import Banner from '../../data/banner.json'

export default function MainPage() {

  const PromotionBanner1 = Banner['PromotionBanner1'];

  return (
    <div className='w-full'>
      {/* 메인 컨텐츠 */}
      <main className="p-4 h-full w-full">

        {/* 배너 */}
        <div className="w-full h-full border border-red-500">
          <img src={PromotionBanner1.image} />
        </div>
        <p className="text-center mt-4">이곳은 메인 페이지입니다.</p>
      </main>
    </div>
  );
}