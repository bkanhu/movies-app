import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
const navItems = [
  { id: 1, href: '/', name: 'Home', icon: <HomeIcon /> },
  { id: 2, href: '/popular', name: 'Popular', icon: <GemIcon /> },
  { id: 3, href: '/trending', name: 'Trending', icon: <TagsIcon /> },
  { id: 4, href: '/upcoming', name: 'Upcoming', icon: <UserIcon /> },
  { id: 5, href: '/watchlist', name: 'Watchlist', icon: <UserIcon /> },
];

import {
  HomeIcon,
  BarChart,
  Wallet,
  Newspaper,
  BellRing,
  Paperclip,
  Brush,
  TagsIcon,
  UserIcon,
  GemIcon,
  Wrench,
} from 'lucide-react';
import Image from 'next/image';

const SidebarOne = () => {
  const router = useRouter();

  return (
    <aside className="">
      <a href="#" className="flex items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-video"
        >
          <path d="m22 8-6 4 6 4V8Z" />
          <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
        </svg>
        <p className="text-xl font-medium ">Movies App</p>
      </a>
      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-3 ">
            <ul>
              {navItems.map((navItem) => (
                <li key={navItem.id} className="my-2">
                  <Link
                    className={`flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700 ${
                      router.pathname === navItem.href
                        ? 'bg-blue-100 text-blue-500'
                        : 'bg-white'
                    }`}
                    href={navItem.href}
                  >
                    {navItem.icon}
                    <span className="mx-2 text-sm font-medium">
                      {navItem.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
      <p className="flex items-center mt-32 text-sm">
        Data provided by{' '}
        <a href="https://www.themoviedb.org/">
          {' '}
          <Image
            src="/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            height={80}
            width={100}
          />
        </a>
      </p>
    </aside>
  );
};
export default SidebarOne;
