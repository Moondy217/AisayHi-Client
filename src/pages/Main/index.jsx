import '../../index.css';
import '../Main/components/SubGreyMenu';
import SubGreyMenu from '../Main/components/SubGreyMenu';

export default function MainPage() {

  return (
    <div className='w-full'> 
      <SubGreyMenu />  
      {/* 메인 컨텐츠 */}
      <main className="p-4 h-full w-full">
        <h1 className="text-4xl font-bold text-center">메인페이지</h1>
        <p className="text-center mt-4">이곳은 메인 페이지입니다.</p>
      </main>
    </div>
  );
}