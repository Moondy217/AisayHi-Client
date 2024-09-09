import useSignUpForm from '../../hooks/useSignUpForm';

function SignUpPage() {
  const { formData, handleChange, handleSubmit, signupError, isLoading } = useSignUpForm();

  return (
    <div className="flex justify-center items-center h-full">
      <div className="text-center mt-[70px] w-[500px]">
        <h1 className="mb-6 text-[48px]">더포마켓 회원가입</h1>

        <form
          noValidate
          onSubmit={handleSubmit}
          className="flex flex-col items-center"
        >
          {/* 이름 입력 필드 */}
          <input
            required
            type="text"
            name="username"
            placeholder="이름"
            value={formData.username}
            onChange={handleChange}
            className="mt-[50px] w-[500px] h-[55px] border-0 border-b-2 border-[#3B6EF1] mb-[25px] focus:outline-none focus:ring-0"
          />

          {/* 아이디 입력 필드 */}
          <input
            required
            type="text"
            name="login_id"
            placeholder="아이디"
            value={formData.login_id}
            onChange={handleChange}
            className="mt-[50px] w-[500px] h-[55px] border-0 border-b-2 border-[#3B6EF1] mb-[25px] focus:outline-none focus:ring-0"
          />

          {/* 비밀번호 입력 필드 */}
          <input
            required
            type="password"
            name="userpwd"
            placeholder="비밀번호"
            value={formData.userpwd}
            onChange={handleChange}
            className="mt-[50px] w-[500px] h-[55px] border-0 border-b-2 border-[#3B6EF1] mb-[25px] focus:outline-none focus:ring-0"
          />

          {/* 비밀번호 확인 입력 필드 */}
          <input
            required
            type="password"
            name="userpwdConfirm"
            placeholder="비밀번호 확인"
            value={formData.userpwdConfirm}
            onChange={handleChange}
            className="mt-[50px] w-[500px] h-[55px] border-0 border-b-2 border-[#3B6EF1] mb-[25px] focus:outline-none focus:ring-0"
          />

          {/* 에러 메시지 */}
          {signupError && <p className="text-red-500 text-sm mb-4">{signupError}</p>}

          {/* 회원가입 버튼 */}
          <button
            type="submit"
            disabled={isLoading} // 로딩 중일 때 버튼 비활성화
            className={`mt-[50px] mb-[100px] w-[500px] h-[50px] rounded-[13px] bg-[#3B6EF1] text-white ${
              isLoading ? 'bg-gray-500' : 'hover:bg-blue-600'
            } focus:outline-none`}
          >
            {isLoading ? '가입 중...' : '회원가입 완료'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
