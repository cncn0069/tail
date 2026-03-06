// src/hooks/useInputs.test.ts

import { act, renderHook } from "@testing-library/react";
import { useInputs } from "./useInputs";

describe("useInputs 테스트", () => {
  test("초기값이 올바르게 설정되는지 확인", () => {
    // 컴포넌트를 그릴 땐 render를 사용했습니다.
    // 하지만 커스텀 훅을 독립적으로 테스트할 땐 renderHook을 사용합니다.
    const { result } = renderHook(() => useInputs({ name: "", nickname: "" }));

    expect(result.current.values).toEqual({ name: "", nickname: "" });
  });
  test("초기값이 올바르게 설정되는지 확인", () => {
    // 컴포넌트를 그릴 땐 render를 사용했습니다.
    // 하지만 커스텀 훅을 독립적으로 테스트할 땐 renderHook을 사용합니다.
    const { result } = renderHook(() => useInputs({ name: "", nickname: "" }));

    const event = {
      target: {
        name: "email",
        value: "cncn@maver.com",
      },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleChange(event);
    });

    expect(result.current.values).toEqual({
      name: "email",
      email: "cncn@maver.com",
    });
  });
});
