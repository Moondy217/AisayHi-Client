import iconData from '../../../data/commonIcon.json';
import useMenuStore from "../../../store/menuStore";

export default function MainMenu() {

  const toggleMenu = useMenuStore((state) => state.toggleMenu); // zustand에서 메뉴 전환 함수 가져오기
  const menuIcon = iconData['menuIcon'];

  return (
    <div className="hidden md:flex items-start justify-center text-white hover:text-gray-200 cursor-pointer space-x-7 flex-1 mt-1 mb-0 text-[24px] font-bold">
        <div 
          onClick={(e) => {
            e.preventDefault();
            toggleMenu(); // 메뉴 전환 함수 호출
          }}
        >
          {menuIcon ? (
          <div className="flex items-center space-x-7">
            <img
              src={menuIcon.image} // iconData에서 가져온 image 경로
              alt={menuIcon.name}  // iconData에서 가져온 name 값
            />
            <div>전체 카테고리</div>
          </div>
          ) : null /* 데이터가 없을 때 아무것도 렌더링하지 않음 */}
          </div>
      
        {/* 다른 메뉴 항목 */}
        <div className="text-white no-underline">|</div>
        <div className="text-white hover:text-gray-200 no-underline cursor-pointer">전체 상품 보기</div>
        <div className="text-white hover:text-gray-200 no-underline cursor-pointer">Porter Pick</div>
        <div className="text-white hover:text-gray-200 no-underline cursor-pointer">모바일 상품권</div>
        <div className="text-white hover:text-gray-200 no-underline cursor-pointer">선물하기</div>
    </div>
  );
}