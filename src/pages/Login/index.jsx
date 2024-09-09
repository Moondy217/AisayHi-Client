import useLoginForm from '../../hooks/useLoginForm';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  const { loginId, userPwd, loginError, setLoginId, setUserpwd, handleLogin } = useLoginForm(); // useLoginForm 훅 사용

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await handleLogin(); // 로그인 처리 함수 호출

    if (result) {
      // 로그인 성공 시 알림을 띄우고 메인 페이지로 이동
      alert('로그인 성공');
      navigate('/'); // 메인 페이지로 이동
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="text-center mt-[70px] w-[500px]">
        <h1 className="mb-6 mt-0 text-[48px]">더포마켓 로그인</h1>

        <form noValidate onSubmit={handleSubmit} className="flex flex-col items-center w-full">
          <div className="w-full">
            <input
              type="text"
              name="login_id"
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
              placeholder="아이디 입력"
              className="mt-[50px] h-[50px] w-full border !border-[#3B6EF1] rounded-t-[13px] border-b-0 focus:outline-none px-3"
              required
            />
          </div>

          <div className="w-full">
            <input
              type="password"
              name="userpwd"
              value={userPwd}
              onChange={(e) => setUserpwd(e.target.value)}
              placeholder="비밀번호 입력"
              className="h-[50px] w-full border border-[#3B6EF1] rounded-b-[13px] focus:outline-none px-3"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-[50px] h-[50px] w-full rounded-[13px] bg-[#3B6EF1] text-white hover:bg-blue-600 focus:outline-none"
          >
            로그인
          </button>

          {loginError && <p className="text-red-500 mt-4">{loginError}</p>}
        </form>
      </div>
    </div>
  );
}
