import { Link } from "react-router-dom";

function NotFoundPage() {
  const xml = (
    <div className="flex flex-col gap-[2rem] justify-center items-center h-dvh">
      <h1 className="text-center text-[5rem]">
        <span className="text-[#61A061]">404</span> Page Not Found
      </h1>
      <Link
        to="/"
        className="text-[#fff] bg-[#61A061] py-[1rem] px-[0.55rem] rounded-[0.5rem] text-[2rem]"
      >
        Go Back
      </Link>
    </div>
  );
  return xml;
}

export default NotFoundPage;
