import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  const xml = (
    <main className="h-dvh bg-black text-white text-[4rem] text-center pt-40">
      Error Occured
    </main>
  );
  return xml;
}

export default ErrorPage;
