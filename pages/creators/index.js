import Header from "../../components/Header/Header";
import LeftHome from "../../components/HomeComponents/LeftHome";
import BrowseComponent from "../../components/BrowseComponent/BrowseComponent";

export default function Creators({ creatorsData, page }) {
  return (
    <div className="w-[100%] bg-[#101112] px-5">
      <Header />
      <div className=" mt-10 w-[100%] h-[100%] flex ">
        <div className="w-[0%] hidden lg:flex lg:w-[17%]">
          <LeftHome />
        </div>
        <div className="w-[100%] ml-4 lg:w-[83%]">
          <BrowseComponent
            data={creatorsData}
            page={page}
            title={"Creators"}
            hasPage={false}
          />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const res = await fetch(
    `https://api.rawg.io/api/creators?key=${process.env.API_KEY}&page=${page}`
  );
  const data = await res.json();

  if (res.status < 300) {
    return {
      props: {
        creatorsData: data,
        page: +page,
      },
    };
  }

  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
}
