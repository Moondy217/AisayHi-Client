import useMenuStore from "../../../store/menuStore";

export default function MainMenu() {

  const toggleMenu = useMenuStore((state) => state.toggleMenu); // zustand에서 메뉴 전환 함수 가져오기

  return (
    <div className="hidden md:flex items-start justify-center space-x-8 flex-1 pl-14 mt-1 mb-0">
        <div 
          onClick={(e) => {
            e.preventDefault(); // 기본 동작 방지
            toggleMenu(); // 메뉴 전환 함수 호출
          }}
        >
          전체 카테고리
        </div>
    
        {/* 다른 메뉴 항목 */}
        <div className="text-white hover:text-gray-200 no-underline ">전체 상품 보기</div>
        <div className="text-white hover:text-gray-200 no-underline">Porter Pick</div>
        <div className="text-white hover:text-gray-200 no-underline">모바일 상품권</div>
        <div className="text-white hover:text-gray-200 no-underline">선물하기</div>
    </div>
  );
}