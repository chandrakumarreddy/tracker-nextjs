import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <React.Fragment>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </React.Fragment>
  );
}
