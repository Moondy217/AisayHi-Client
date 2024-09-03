import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import MainSearchBar from './MainSearchBar';
import '../../../index.css';

export default function MainNavbar() {
  return (
    <nav className="bg-[#3B6EF1] flex flex-col items-center text-white h-[170px]">
      <div className="container h-full">
        {/* 첫 번째 줄: 로고 및 로그인/회원가입 */}
        <div className="flex items-center justify-between h-[85px] mb-0">
          {/* 로고 */}
          <div className="flex items-center">
            <Link to="/" aria-label="Main">
              <img src={Logo} alt="The Porter Marker Logo" className="h-[45px]" />
            </Link>
          </div>

          {/* 로그인 및 회원가입 링크 */}
          <div className="flex items-center text-[20px] space-x-4">
            <Link to="/LoginPage" className="text-white hover:text-gray-200 no-underline" aria-label="Login">
              로그인
            </Link>
            <Link to="/signup" className="text-white hover:text-gray-200 no-underline mr-2" aria-label="Sign Up">
              회원가입
            </Link>
          </div>
        </div>

        {/* 두 번째 줄: 텍스트, 네비게이션 메뉴 및 검색바 */}
        <div className="flex items-start justify-between text-[18px] h-[85px] mt-0 mb-0">
          {/* 텍스트 및 네비게이션 메뉴 */}
          <div className="flex items-start space-x-4 h-full px-0 py-0">
            <span className="font-bold text-[24px]">
              <Link to="/" className="text-white hover:text-gray-200 no-underline" aria-label="Main">
                THE PORTER MARKET
              </Link>
              </span>

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
          </div>

          {/* 검색바 */}
          <MainSearchBar />
        </div>
      </div>
    </nav>
  );
}
