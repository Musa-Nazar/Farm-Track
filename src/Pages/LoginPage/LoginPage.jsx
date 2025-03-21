import Details from "./Details"
import Header from "./Header"

function SignUpPage() {
  const xml = (
    <>
      <div className="con h[84rem] w[90rem] grid">
        <div className="flex gap[20px]  h-[898px] w-[1201px] mx-[129px] my-[70px]">
          <Header />
          <div className="pt-[110px] bg-white h-[898px] w-[709px] grid justify-center">
            <Details />
          </div>
        </div>
      </div>
    </>
  );
  return xml;
}
//p-5 lg:mx-[8.1rem] lg:my-[4.3rem] bg-white lg:h-[56.12rem] lg:w[709px]

export default SignUpPage;