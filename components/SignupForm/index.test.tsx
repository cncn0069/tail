import { render, screen } from "@testing-library/react";
import SignupForm from ".";

test("이메일,비밀번호, 비밀번호 확인 입력필드가 렌더링이 잘되었나", () => {
  render(<SignupForm />);

  const emailByLabel = screen.getByText("이메일");
  const passwordByLabel = screen.getByText("비밀번호");
  const placeholderByLabel = screen.getByText("비밀번호 확인");
  const buttonByRole = screen.getByRole("button", { name: "회원가입" });

  const passwordByType = screen.getByPlaceholderText("비밀번호");

  expect(emailByLabel).toBeInTheDocument();
  expect(passwordByLabel).toBeInTheDocument();
  expect(placeholderByLabel).toBeInTheDocument();

  expect(passwordByType).toHaveAttribute("type", "password");

  expect(buttonByRole).toBeInTheDocument();
});
