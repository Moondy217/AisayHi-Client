import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import MainNavbar from '../../../pages/Main/components/MainNavbar';
import SubGreyMenu from '../../../pages/Main/components/SubGreyMenu';
import SubCateMenu from '../../../pages/Main/components/SubCateMenu';
import useMenuStore from '../../../store/menuStore';
import Footer from '../../../pages/Footer/index';

export default function RootLayoutProvider({ children }) {
  const queryClient = new QueryClient();
  const isSubCateMenu = useMenuStore((state) => state.isSubCateMenu);

  return (
    <QueryClientProvider client={queryClient}>
      {/* 상단 네비게이션 */}
      <MainNavbar />

      {/* 상태에 따라 SubGreyMenu 또는 SubCateMenu 렌더링 */}
      <div className="relative w-full">
        {isSubCateMenu ? (
          <SubCateMenu className="absolute top-0 left-0 w-full z-30" /> // 메뉴를 absolute로 설정
        ) : (
          <SubGreyMenu className="absolute top-0 left-0 w-full z-30" /> // 메뉴를 absolute로 설정
        )}
      </div>

      {/* 메인 페이지 콘텐츠 */}
      <div className="h-full flex justify-center items-center relative z-10 mx-[150px] mt-[104px] border border-red-500">
        {children}
      </div>

      {/* Footer를 항상 하단에 배치 */}
      <div className="mt-[130px]">
        <Footer />
      </div>
      
    </QueryClientProvider>
  );
}

RootLayoutProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
