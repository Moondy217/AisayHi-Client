import '../../index.css'; // Tailwind CSS 파일 포함
import { useState } from 'react';
import { Form, Row, Button } from 'react-bootstrap';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    login_id: '',
    userpwd: ''
  });
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.login_id && formData.userpwd) {
      setValidated(true);
      console.log('Form submitted:', formData);
      // 로그인 로직 처리
    } else {
      setValidated(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-[500px]">
      <div className="text-center mt-[70px] w-[500px]">
        <h1 className="mb-4 text-2xl font-bold">더포마켓 로그인</h1>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group controlId="login_id">
              <Form.Control
                required
                type="text"
                name="login_id"
                value={formData.login_id}
                onChange={handleChange}
                placeholder="아이디 입력"
                className="mt-[20px] h-[50px] border border-[#3B6EF1] rounded-t-[13px] border-b-0 focus:outline-none px-3"
              />
              <Form.Control.Feedback type="invalid">
                아이디를 입력하세요.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="userpwd" className="mt-4">
              <Form.Control
                required
                type="password"
                name="userpwd"
                value={formData.userpwd}
                onChange={handleChange}
                placeholder="비밀번호 입력"
                className="h-[50px] border border-[#3B6EF1] rounded-b-[13px] focus:outline-none px-3"
              />
              <Form.Control.Feedback type="invalid">
                비밀번호를 입력하세요.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Button
            type="submit"
            className="mt-[30px] h-[50px] w-full rounded-[13px] bg-[#3B6EF1] text-white hover:bg-blue-600 focus:outline-none"
          >
            로그인
          </Button>
        </Form>
      </div>
    </div>
  );
}