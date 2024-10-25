import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ProductCard({ item }) {
  return (
    <div className="p-4">
      <div
        className="w-[300px] h-[580px] border rounded-[14px] p-4 flex flex-col justify-between 
                  hover:shadow-lg transition-shadow h-full"
      >
        <Link to={`/product/${item.goodsName}`} className="flex-grow">
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
    goodsName: PropTypes.string.isRequired,
    goodsImg: PropTypes.string.isRequired,
    originalPrice: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;