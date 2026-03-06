// src/app/page.tsx

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <form className="w-100">
        <div className="flex flex-col pb-4">
          <label htmlFor="email" className="pb-2">
            이메일
          </label>
          <input
            type="email"
            id="email"
            className="w-full rounded-md border border-gray-200 bg-sky-50 p-2"
            placeholder="abc@gmail.com"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="pb-2">
            비밀번호
          </label>
          <input
            type="password"
            id="password"
            className="w-full rounded-md border border-gray-200 bg-sky-50 p-2"
            required
          />
        </div>
        <div className="flex py-4">
          <div className="pr-2">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="text-blue-400"
              required
              checked
            />
          </div>
          <label htmlFor="remember" className="">
            로그인 상태 유지
          </label>
        </div>
        <button
          type="submit"
          className="mt-2 w-full rounded-md border bg-blue-600 px-5 py-2.5"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
