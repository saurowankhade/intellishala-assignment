import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href='/' className="flex items-center gap-2.5 hover:opacity-70">
      <Image
        src="/intellishala-logo.png"
        alt="Intellishala"
        width={36}
        height={36}
        className="rounded-lg"
        priority
      />
      <span className="text-xl font-semibold text-gray-950">Intellishala</span>
    </Link>
  );
};

export default Logo;
