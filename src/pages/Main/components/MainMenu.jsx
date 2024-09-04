export default function MainMenu() {

    return (
    <div className="hidden md:flex items-start justify-center space-x-8 flex-1 pl-14 mt-1 mb-0">
        <a href="#" className="text-white hover:text-gray-200 no-underline">
          전체 카테고리
        </a>
        <a href="#" className="text-white hover:text-gray-200 no-underline">
          전체 상품 보기
        </a>
        <a href="#" className="text-white hover:text-gray-200 no-underline">
          Porter Pick
        </a>
        <a href="#" className="text-white hover:text-gray-200 no-underline">
          모바일 상품권
        </a>
        <a href="#" className="text-white hover:text-gray-200 no-underline">
          선물하기
        </a>
      </div>
    );
  }