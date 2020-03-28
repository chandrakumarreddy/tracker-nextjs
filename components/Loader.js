import ClipLoader from "react-spinners/ClipLoader";

export default function Loader() {
  return (
    <div className="loader flex-center">
      <ClipLoader size={150} color={"#123abc"} />
      <style jsx>{`
        .loader {
          width: 100vw;
          height: 100vh;
        }
      `}</style>
    </div>
  );
}
