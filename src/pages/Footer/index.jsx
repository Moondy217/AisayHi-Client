import iconData from '../../data/commonIcon.json';

export default function Footer() {

  const footerLogo = iconData['footerLogo'];

  return (
    <footer className="flex w-full h-[130px] items-center">

<div className="flex w-full h-full items-center">
        {/* Footer 이미지 박스 */}
        <div className="flex flex-none justify-center items-center ml-[150px]">
        <img
              src={footerLogo.image} />
        </div>

        {/* Footer 텍스트 박스 */}
        <div className="flex flex-col justify-center items-start h-full ml-[28px] text-[15px]">
          <span className="font-bold">
            개인정보처리방침 <span className="text-[#C8C6C6]"> | </span> 이용약관
          </span>
          <span>
            (주)더포터마켓 대표 : 손예지 <span className="text-[#C8C6C6]"> | </span>
            TEL: 02-0929-1234<span className="text-[#C8C6C6]"> | </span> theportermarket@kw.ac.kr
          </span>
          <span>
            서울특별시 노원구 광운로 20<span className="text-[#C8C6C6]"> | </span>
            통신판매업 신고 : 2024-서울노원-0001호<span className="text-[#C8C6C6]"> | </span>
            사업자 등록번호 : 111-11-11111
          </span>
          <span className="text-[#C8C6C6]">
            Copyright ⓒ 2024 Theportermarket. All rights reserved.
          </span>
        </div>
      </div>

    </footer>
  );
}