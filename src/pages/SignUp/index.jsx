import useSignUpForm from '../../hooks/useSignUpForm';

function SignUpPage() {
  const { formData, validated, handleChange, handleSubmit } = useSignUpForm();

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

          {/* 회원가입 버튼 */}
          <button
            type="submit"
            className="mt-[50px] mb-[100px] w-[500px] h-[50px] rounded-[13px] bg-[#3B6EF1] text-white hover:bg-blue-600 focus:outline-none"
          >
            회원가입 완료
          </button>
        </form>

        {/* 유효성 검사에 따른 메시지 표시 */}
        {!validated && <p className="text-red-500 mt-4">입력한 정보를 확인해주세요.</p>}
      </div>
    </div>
  );
}

export default SignUpPage;
