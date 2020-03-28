import React from "react";

export default function Error() {
  return (
    <React.Fragment>
      <main>
        <div className="container">
          <p className="hero">
            <span className="bigger">404</span>
            <span>Not</span>
            <span>Found</span>
          </p>
        </div>
      </main>
      <style jsx>{`
        ::-moz-selection {
          background: transparent;
          color: #03a9f4;
        }

        ::selection {
          background: transparent;
          color: #03a9f4;
        }

        main {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          max-width: 100%;
        }

        .container {
          max-width: 100%;
        }

        .hero {
          margin: 0;
          font-size: 6em;
          font-weight: bold;
          line-height: 0.85;
          letter-spacing: -0.05em;
          text-transform: uppercase;
        }
        .hero span {
          display: block;
          word-wrap: break-word;
        }
        .hero span.bigger {
          font-size: 1.5em;
        }

        .links {
          color: #666;
          margin: 4em 0 0;
        }
        .links a {
          color: #666;
          text-decoration: none;
        }
        .links a:first-child {
          font-weight: bold;
        }
        .links a:not(:first-child) {
          margin-left: 0.6em;
        }

        @media (max-width: 720px) {
          .hero {
            font-size: 4em;
          }
        }
      `}</style>
    </React.Fragment>
  );
}
