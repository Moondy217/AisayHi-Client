import Logo from '../assets/Logo.svg';
import MainSearchBar from '../components/MainSearchBar';

export default function MainNavbar() {
  return (
    <nav className="bg-[#3B6EF1] flex items-center text-fontSize24 h-[170px] flex-col">
      <div className="container h-full">
        {/* 첫 번째 줄: 로고 및 로그인/회원가입 */}
        <div className="flex items-center justify-between h-[85px] ml-16 mr-16 mb-0">
          {/* 로고 */}
          <div className="flex items-center">
            <img src={Logo} alt="The Porter Marker Logo" className="h-[45px]" />
          </div>

          {/* 로그인 및 회원가입 링크 */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white hover:text-gray-200" aria-label="Login">
              로그인
            </a>
            <a href="#" className="text-white hover:text-gray-200 mr-2" aria-label="Sign Up">
              회원가입
            </a>
          </div>
        </div>

        {/* 두 번째 줄: 텍스트, 네비게이션 메뉴 및 검색바 */}
        <div className="flex items-start justify-between h-[85px] ml-16 mr-16 mt-0 mb-0">
          {/* 텍스트 및 네비게이션 메뉴 */}
          <div className="flex items-start space-x-4 h-full px-0 py-0">
            <span className="text-white font-bold text-[24px]">THE PORTER MARKET</span>
            <div className="hidden md:flex justify-center space-x-8 flex-1 pl-14">
              <a href="#" className="text-white hover:text-gray-200">
                전체 카테고리
              </a>
              <a href="#" className="text-white hover:text-gray-200">
                전체 상품 보기
              </a>
              <a href="#" className="text-white hover:text-gray-200">
                Porter Pick
              </a>
              <a href="#" className="text-white hover:text-gray-200">
                모바일 상품권
              </a>
              <a href="#" className="text-white hover:text-gray-200">
                선물하기
              </a>
            </div>
          </div>

          {/* 검색바 */}
          <MainSearchBar />

        </div>
      </div>
    </nav>
  );
}
