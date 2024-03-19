import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-3xl bg-transparent border-4 border-teal-900 rounded-md text-white font-bold px-4 py-2 mb-4 mt-20">CPRG 306: Web Development 2 - Assignments</h1>
      <div>
        <div className="text-xl p-2">
          Assignments:
          <Link href="/week-2">
            <div className="mb-3 p-2 bg-teal-900 hover:bg-blue-900 text-white rounded-md cursor-pointer mt-2">
              Week 2
            </div>
          </Link>
          <Link href="/week-3">
            <div className="mb-3 p-2 bg-teal-900 hover:bg-blue-900 text-white rounded-md cursor-pointer mt-2">
              Week 3
            </div>
          </Link>
          <Link href="/week-4">
            <div className="mb-3 p-2 bg-teal-900 hover:bg-blue-900 text-white rounded-md cursor-pointer mt-2">
              Week 4
            </div>
          </Link>
          <Link href="/week-5">
            <div className="mb-3 p-2 bg-teal-900 hover:bg-blue-900 text-white rounded-md cursor-pointer mt-2">
              Week 5
            </div>
          </Link>
          <Link href="/week-6">
            <div className="mb-3 p-2 bg-teal-900 hover:bg-blue-900 text-white rounded-md cursor-pointer mt-2">
              Week 6
            </div>
          </Link>
          <Link href="/week-7">
            <div className="mb-3 p-2 bg-teal-900 hover:bg-blue-900 text-white rounded-md cursor-pointer mt-2">
              Week 7
            </div>
          </Link>
          <Link href="/week-8">
            <div className="mb-3 p-2 bg-teal-900 hover:bg-blue-900 text-white rounded-md cursor-pointer mt-2">
              Week 8
            </div>
          </Link>
          <Link href="/week-10">
            <div className="mb-3 p-2 bg-teal-900 hover:bg-blue-900 text-white rounded-md cursor-pointer mt-2">
              Week 10
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
