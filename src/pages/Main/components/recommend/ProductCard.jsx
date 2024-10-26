import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ProductCard({ item }) {
  return (
    <div className="p-1 flex justify-start">
      <div
        className="w-[350px] h-[550px] border rounded-[14px] p-4 flex flex-col 
                   justify-between hover:shadow-lg transition-shadow overflow-visible"
      >
        {/* Link에 상품 정보를 state로 전달 */}
        <Link to={`/product/${item.goodsKey}`} state={{ product: item }} className="flex-grow">
          <img
            src={item.goodsImg}
            alt={item.goodsName}
            className="w-full h-64 object-cover rounded-md mb-4"
          />
          <div className="productName text-[18px] font-semibold mb-2 text-center">
            {item.goodsName}
          </div>
        </Link>
        <div className="productPrice text-red-500 text-center mt-auto">
          {item.originalPrice.toLocaleString()}원
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  item: PropTypes.shape({
    goodsKey: PropTypes.number.isRequired, 
    goodsName: PropTypes.string.isRequired,
    goodsImg: PropTypes.string.isRequired,
    originalPrice: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
