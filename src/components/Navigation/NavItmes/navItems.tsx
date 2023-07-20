import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
const Index = ({ Path, Title }: { Path: string; Title: string }) => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <Link href={Path} passHref>
      <div
        className={`text-xl cursor-pointer flex gap-2 items-center ${
          router.pathname === Path ? 'text-blue-200' : 'hover:text-blue-200'
        }`}
      >
        <div className="hidden md:block font-semibold">{Title}</div>
      </div>
    </Link>
  );
};

export default Index;
