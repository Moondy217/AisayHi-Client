import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  useEffect(() => {
    if (!product) {
      navigate('/', { replace: true });
    }
  }, [product, navigate]);


  return (
    <div className="container mx-auto p-5">
      <div className="flex flex-wrap md:flex-nowrap">
        {/* 왼쪽: 이미지 */}
        <div className="w-full md:w-1/2 flex items-center justify-center border border-[#D9D9D9] rounded-[14px]">
        <img
            src={product.goodsImg}
            alt={product.goodsName}
            className="max-w-full h-auto rounded-[14px] shadow-md md:h-[500px] object-contain"
        />
        </div>

        {/* 오른쪽: 상품 정보 */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 p-6">
          <h1 className="text-4xl font-bold">{product.goodsName}</h1>
          <p className="text-2xl text-red-500">
            {product.originalPrice.toLocaleString()}원
          </p>

          <div>
            <strong className="block mb-2 text-lg font-semibold">배송정보</strong>
            <div className="grid grid-cols-[150px_1fr] gap-x-4 gap-y-2 text-[#707070]">
                <strong>일반배송</strong>
                <p>2,500원 (20,000원 이상 무료배송)</p>

                <strong>더포터마켓 배송</strong>
                <p>평균 5일 이내 배송</p>

                <strong>포터드림</strong>
                <p>2,500원 또는 5,000원</p>

                <strong>픽업</strong>
                <p>배송비 조건 없음</p>
            </div>
            
            <hr className="border-t-[1px] border-[#707070] my-4" />

        </div>

          <div>
            <strong className="block mb-2">결제혜택</strong>
            <p className="text-[#707070]">THE CJ 카드 10% 추가 할인</p>
            <p className="text-[#707070]">POTER 카드 15% 추가 할인</p>
          </div>

            {/* 버튼 섹션 */}
            <div className="flex space-x-4 mt-auto">
                <button
                className="w-[230px] h-[60px] bg-[#6A90F2] text-white font-semibold rounded-[14px] hover:bg-blue-600 transition"
                onClick={() => alert('장바구니에 담겼습니다!')}
                >
                장바구니
                </button>
                <button
                className="w-[230px] h-[60px] bg-[#3B6EF1] text-white font-semibold rounded-[14px] hover:bg-blue-700 transition"
                onClick={() => alert('바로 구매합니다!')}
                >
                바로구매
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;