import '../components/styles/styles.css';

export default function MainSearchBar() {
    // 검색 실행을 위한 함수
    const handleSearch = () => {
    };
  
    // 엔터 키 이벤트 핸들러
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        handleSearch();
      }
    };
  
    return (
      <div className="relative">
        <input
          className="searchInput"
          type="text"
          placeholder="검색어를 입력하세요"
          onKeyDown={handleKeyDown} // 엔터 키 이벤트 핸들러
        />
        <button
          className="absolute inset-y-0 right-0 flex items-center"
          onClick={handleSearch} // 버튼 클릭 이벤트 핸들러
        >
          {/* 검색 아이콘 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 searchIcon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M21 21l-4.35-4.35m1.41-5.66a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    );
  }