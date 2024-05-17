import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-gray-800 flex justify-between items-center py-2 px-32">
      <div>
        <Link href="/">
          <Image src="/logo.png" alt="" width={200} height={300} />
        </Link>
      </div>
      <div className="text-white flex gap-3">
        <Link href="/">PRODUCTS</Link>
        <Link href="/cart">CART</Link>
      </div>
      <div>
        <button className="text-white bg-blue-700 py-2 px-4 rounded-md">
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Header;
