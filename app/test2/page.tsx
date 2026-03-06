// src/app/page.tsx

import Image from "next/image";

export default function Test2() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex h-fit w-100 flex-col overflow-hidden rounded-2xl border border-gray-300 shadow-2xl">
        <div className="relative h-70 w-full">
          <Image
            className=""
            src="https://images.unsplash.com/photo-1602080858428-57174f9431cf?q=80&w=2151&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            fill
          />
        </div>

        <div className="m-5">
          <h5 className="pb-2 text-lg font-bold">2024년 기술 동향</h5>
          <p className="pb-2 text-gray-600">
            최신 기술 동향에 대한 기사를 통해 혁신적인 아이디어와 트렌드를
            탐구해보세요. 이 글에서는 인공지능과 머신러닝의 발전이 우리 생활에
            미치는 영향을 다룹니다.
          </p>
          <button className="rounded-md border bg-blue-600 px-5 py-3 text-[12px] text-white">
            더보기
          </button>
        </div>
      </div>
    </div>
  );
}
