import React from 'react';
import Logo from '../assets/Logo.svg';

export default function Navbar() {
  return (
    <nav className="bg-[#3B6EF1] h-[170px] flex flex-col">
      <div className="container mx-auto px-4 h-full">
        {/* 첫 번째 줄: 로고 및 로그인/회원가입 */}
        <div className="flex items-center justify-between h-[85px]">

          {/* 로고 */}
          <div className="flex items-center p-8">
            <img src={Logo} alt="Company Logo" className="h-8" />
          </div>

          {/* 로그인 및 회원가입 링크 */}
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-white hover:text-gray-200" aria-label="Login">
              로그인
            </a>
            <a href="#" className="text-white hover:text-gray-200" aria-label="Sign Up">
              회원가입
            </a>
          </div>
        </div>

        {/* 두 번째 줄: 텍스트, 네비게이션 메뉴 및 검색바 */}
        <div className="flex items-center justify-between w-full h-[85px]">
          
          {/* 텍스트 및 네비게이션 메뉴 */}
          <div className="flex items-center space-x-4">
            <span className="text-white font-bold text-[24px] m-8">THE PORTER MARKET</span>

            <div className="hidden md:flex space-x-8">
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
          <div className="flex items-center">
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              className="px-4 py-2 rounded-full bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="text-white ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35m1.41-5.66a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
