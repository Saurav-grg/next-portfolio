'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

const PrefetchingLink = ({ link }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleMouseEnter = React.useCallback(() => {
    console.log('mouse entered');
    router.prefetch(link.url);
  }, [router, link.url]);
  const pathName = usePathname();

  return (
    <Link
      onMouseEnter={handleMouseEnter}
      className={`rounded p-1 font-semibold bg-gradient-to-br from-[#707072] via-[#cdced2] via-[#fcfcfe] via-[#d0d1d6] via-[#818286] to-[#a1a1a3] bg-clip-text text-transparent ${
        pathName === link.url &&
        'bg-gradient-to-r from-[#b27f1f] via-[#fefe68] to-[#f3a80a]'
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default PrefetchingLink;
