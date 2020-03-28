import React from "react";
import NextNProgress from "nextjs-progressbar";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <NextNProgress />
      <Header />
      <Component {...pageProps} />
      <style jsx global>
        {`
          @import url("https://fonts.googleapis.com/css?family=Comfortaa&display=swap");
          html,
          body {
            font-family: "Comfortaa", monospace;
            font-size: 16px;
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
          }
          .container {
            margin: 16px;
          }
          input {
            padding: 10px;
          }
          .flex-center {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .flex-column {
            flex-direction: column;
          }
          .btn {
            padding: 10px;
            display: block;
            border: none;
            background-color: #3b5998;
            color: #fff;
            cursor: pointer;
          }
          .btn-block {
            width: 100%;
          }
          .mb-1 {
            margin-bottom: 10px;
          }
        `}
      </style>
    </React.Fragment>
  );
}

export default MyApp;
