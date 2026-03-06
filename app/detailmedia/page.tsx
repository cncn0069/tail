import Image from "next/image";

export default async function Home() {
  const response = await fetch("https://fakestoreapi.com/products/1");
  const product = await response.json();

  return (
    <div className="flex flex-col items-center md:h-14 md:w-2/3 md:flex-row">
      <div className="relative flex h-48 w-50 md:h-24 md:w-20">
        <Image src={product.image} alt={product.title} fill />
      </div>
      <div>
        <h1 className="font-bold">{product.title}</h1>
        <p className="text-sm text-gray-500">{product.description}</p>
        <p className="font-bold">$ {product.price}</p>
      </div>
    </div>
  );
}
