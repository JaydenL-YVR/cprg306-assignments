import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">CPRG 306: Web Development 2 - Assignments</h1>
      <div>
        Assignments:
        <Link href="/week-2">
          <div className="text-blue-500 hover:underline ml-2">Week 2</div>
        </Link>
        <Link href="/week-3">
          <div className="text-blue-500 hover:underline ml-2">Week 3</div>
        </Link>
        <Link href="/week-4">
          <div className="text-blue-500 hover:underline ml-2">Week 4</div>
        </Link>
        <Link href="/week-5">
          <div className="text-blue-500 hover:underline ml-2">Week 5</div>
        </Link>
        <Link href="/week-6">
          <div className="text-blue-500 hover:underline ml-2">Week 6</div>
        </Link>
      </div>
    </main>
  );
}
