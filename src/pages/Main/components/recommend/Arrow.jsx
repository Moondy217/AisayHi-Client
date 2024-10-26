import PropTypes from 'prop-types';
import ArrowLeft from '../../assets/ArrowLeft';
import ArrowRight from '../../assets/ArrowRight';

function Arrow({ className, style, onClick, direction }) {
  const positionStyle =
    direction === 'left'
      ? { left: '-48px' } // 왼쪽 화살표 위치 조정
      : { right: '-18px' }; // 오른쪽 화살표 위치 조정

      return (
        <div
          className={`custom-arrow ${className} absolute top-1/2 transform -translate-y-1/2 cursor-pointer z-10`}
          onClick={onClick}
          style={{ ...style, ...positionStyle }}
        >
          {direction === 'left' ? <ArrowLeft /> : <ArrowRight />}
        </div>
      );
    }

Arrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  direction: PropTypes.oneOf(['left', 'right']),
};

export default Arrow;