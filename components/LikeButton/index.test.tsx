import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import { LikeButton } from ".";

test("좋아요 버튼을 누르기 전에는 버튼에 좋아요 표시가 있나", () => {
  //컴포넌트 렌더링하기
  render(<LikeButton />);

  const buttonElement = screen.getByRole("button", { name: "좋아요" });

  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveClass("bg-gray-400");
});

test("좋아요 버튼을 누르기 전에는 버튼에 좋아요 표시가 있나", () => {
  //컴포넌트 렌더링하기
  render(<LikeButton />);

  const buttonElement = screen.getByRole("button", { name: "좋아요" });
  fireEvent.click(buttonElement);

  expect(buttonElement).toHaveAccessibleName("좋아요 취소");
  expect(buttonElement).toHaveClass("bg-red-400");
});

test("좋아요 버튼을 누르기 전에는 버튼에 좋아요 표시가 있나", () => {
  //컴포넌트 렌더링하기
  render(<LikeButton />);

  const buttonElement = screen.getByRole("button", { name: "좋아요" });
  fireEvent.click(buttonElement);
  const buttonCancleElement = screen.getByRole("button", {
    name: "좋아요 취소",
  });
  fireEvent.click(buttonCancleElement);

  expect(buttonCancleElement).toBeInTheDocument();
  expect(buttonElement).toHaveClass("bg-gray-400");
});
