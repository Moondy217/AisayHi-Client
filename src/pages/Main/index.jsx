import '../../index.css'; // Tailwind CSS 파일 포함
import Navbar from '../Main/components/MainNavbar';

export default function MainPage() {

  return (
    <div>
      {/* 네비게이션 바 */}
      <Navbar />
      
      {/* 메인 컨텐츠 */}
      <main className="p-4">
        <h1 className="text-4xl font-bold text-center">메인페이지</h1>
        <p className="text-center mt-4">이곳은 메인 페이지입니다.</p>
      </main>
    </div>
  );
}