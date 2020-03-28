import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="header">
      <Link href="/">
        <a className="header__brand">Tracker</a>
      </Link>
      <div>
        <Link href="/add-habit">
          <a>Add Habit</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
      <style jsx>{`
        .header {
          display: flex;
          box-sizing: border-box;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          background-color: #333;
          padding: 10px 16px;
        }
        a {
          color: #fff;
          text-decoration: none;
        }
        .header__brand {
          font-weight: bold;
          font-size: 1.2rem;
        }
      `}</style>
    </nav>
  );
}
