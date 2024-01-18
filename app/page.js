import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">CPRG 306: Web Development 2 - Assignments</h1>
      <div>
        Assignments:
        <Link href="/week-2">
          <div className="text-blue-500 hover:underline ml-2">Week 2</div>
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
