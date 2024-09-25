import useMenuStore from "../../../store/menuStore";

export default function MainMenu() {

  const toggleMenu = useMenuStore((state) => state.toggleMenu); // zustand에서 메뉴 전환 함수 가져오기

  return (
    <div className="hidden md:flex items-start justify-center text-white hover:text-gray-200 cursor-pointer space-x-12 flex-1 mt-1 mb-0">
        <div 
          onClick={(e) => {
            e.preventDefault();
            toggleMenu(); // 메뉴 전환 함수 호출
          }}
        >
          삼
          전체 카테고리
        </div>
    
        {/* 다른 메뉴 항목 */}
        <div className="text-white hover:text-gray-200 no-underline cursor-pointer">전체 상품 보기</div>
        <div className="text-white hover:text-gray-200 no-underline cursor-pointer">Porter Pick</div>
        <div className="text-white hover:text-gray-200 no-underline cursor-pointer">모바일 상품권</div>
        <div className="text-white hover:text-gray-200 no-underline cursor-pointer">선물하기</div>
    </div>
  );
}