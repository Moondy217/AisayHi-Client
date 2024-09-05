const itemsList = [
    ["사무용품", "복사용지", "컬러레이저용지", "바인더", "노트/다이어리/수첩"],
    ["생활용품", "사무실용품", "청소용품", "위생용품", "향균/방충/방향제"],
    ["식/음료", "커피/차", "생수/음료", "과자/시리얼", "사탕/초콜릿"],
    ["PC/주변기기", "노트북", "태블릿", "키보드", "마우스"],
    ["전산소모품", "네트워크 장비", "모바일 용품", "전산 사무기기", "저장기기"]
  ];
  
  export default function SubCateMenu() {
    return (
      <div className="h top-[135px] bg-gray-300 bg-opacity-50 w-full flex justify-center z-20">
        <div className="grid grid-cols-5 bg-white border-x border-[#3B6EF1] w-full h-[230px] overflow-hidden ml-[150px] mr-[150px]">
          {itemsList.map((items, colIndex) => (
            <div
              key={colIndex}
              className={`flex flex-col ${colIndex < itemsList.length - 1 ? 'border-r border-[#3B6EF1]' : ''}`} // 마지막 열을 제외한 모든 열에 오른쪽 보더 추가
            >
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`flex justify-center items-center text-center cursor-pointer text-[16px] h-[46px] border-b border-[#3B6EF1] ${
                    index === 0 ? 'font-bold text-[17px] bg-white' : 'bg-white hover:bg-gray-200'
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }