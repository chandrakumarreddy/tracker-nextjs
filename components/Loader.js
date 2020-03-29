import ClockLoader from "react-spinners/ClockLoader";

export default function Loader() {
  return (
    <div className="loader flex-center">
      <ClockLoader size={150} color={"#123abc"} />
      <style jsx>{`
        .loader {
          width: 100vw;
          height: 100vh;
        }
      `}</style>
    </div>
  );
}
