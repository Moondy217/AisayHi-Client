import useLoginForm from '../../hooks/useLoginForm';

export default function LoginPage() {
  const { formData, handleChange, handleSubmit } = useLoginForm();

  return (
    <div className="flex justify-center items-center h-[500px]">
      <div className="text-center mt-[70px] w-[500px]">
        <h1 className="mb-6">더포마켓 로그인</h1>

        <form noValidate onSubmit={handleSubmit} className="flex flex-col items-center w-full">
          {/* 아이디 입력 필드 */}
          <div className="w-full">
            <input
              type="text"
              name="login_id"
              value={formData.login_id}
              onChange={handleChange}
              placeholder="아이디 입력"
              className="mt-[50px] h-[50px] w-full border border-[#3B6EF1] rounded-t-[13px] border-b-0 focus:outline-none px-3"
              required
            />
          </div>

          {/* 비밀번호 입력 필드 */}
          <div className="w-full">
            <input
              type="password"
              name="userpwd"
              value={formData.userpwd}
              onChange={handleChange}
              placeholder="비밀번호 입력"
              className="h-[50px] w-full border border-[#3B6EF1] rounded-b-[13px] focus:outline-none px-3"
              required
            />
          </div>

          {/* 로그인 버튼 */}
          <button
            type="submit"
            className="mt-[50px] h-[50px] w-full rounded-[13px] bg-[#3B6EF1] text-white hover:bg-blue-600 focus:outline-none"
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}
