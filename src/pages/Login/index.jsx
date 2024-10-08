import useLoginForm from '../../hooks/useLoginForm';
import { Link, useNavigate } from 'react-router-dom';
import LoginImg from './assets/login.svg';

export default function LoginPage() {

  const navigate = useNavigate();
  const { login_id, userpwd, loginError, setLoginId, setUserpwd, handleLogin } = useLoginForm(); // useLoginForm 훅 사용

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
    <div className="flex justify-center items-center w-full h-full">

      {/* 로그인 폼 */}
      <div className="flex w-[1024px] h-full">
        <div className="w-1/2 h-full">
          <div className="h-full">
            <div className="w-[512px] h-[112px]">
              <span className="block text-[44px] font-bold">로그인</span>
              <span className="block text-[#707070] mt-[16px]">등록한 계정으로 로그인하세요</span>
            </div>

            {/* 입력 폼 */}
            <div className="relative w-full mt-4">
              <form noValidate onSubmit={handleSubmit} className="flex flex-col items-center w-full">

                {/* 아이디 입력 폼 */}
                <div className="relative w-full mt-4">
                  <span className="absolute -top-3 left-4 px-2 bg-white text-sm">ID</span>
                  <div className="w-full mb-4">
                    <input
                      type="text"
                      name="login_id"
                      value={login_id}
                      onChange={(e) => setLoginId(e.target.value)}
                      placeholder="아이디를 입력하세요"
                      className="h-[65px] w-full border border-[#000000] rounded-[13px] focus:outline-none px-3"
                      required
                    /> 
                  </div>
                </div>

                {/* 비밀번호 입력 폼 */}
                <div className="relative w-full mt-4">
                  <span className="absolute -top-3 left-4 px-2 bg-white text-sm">Password</span>
                  <div className="w-full mb-4">

                  <input
                    type="password"
                    name="userpwd"
                    value={userpwd}
                    onChange={(e) => setUserpwd(e.target.value)}
                    placeholder="비밀번호를 입력하세요"
                    className="h-[65px] w-full border border-[#000000] rounded-[13px] focus:outline-none px-3"
                    required
                  />
                </div>
              </div>

                <button
                  type="submit"
                  className="mt-[50px] h-[65px] w-full rounded-[13px] bg-[#3B6EF1] text-white font-semibold text-[18px] hover:bg-blue-600 focus:outline-none"
                >
                  로그인
                </button>

                {loginError && <p className="text-red-500 mt-4">{loginError}</p>}
              </form>
            </div>
          </div>
            <div className="flex justify-center mt-[37px] font-semibold text-[16px]">
              아직 THE PORTER의 가족이 아니신가요?
                <div className="hover:cursor text-red-500 ml-[10px]">
                  <Link to="/SignUpPage">회원가입</Link>
                </div>
            </div>
        </div>
        {/* 로그인 이미지 */}
        <div className="w-1/2 h-full flex justify-end">
          <img src={LoginImg} alt="Login Img" className="w-[380px] h-[495px]" />
        </div>
      </div>
    </div>
  );
}
