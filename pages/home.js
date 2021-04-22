import Header from "../components/Header/Header";
import LeftHome from "../components/HomeComponents/LeftHome";
import RightHome from "../components/HomeComponents/RightHome";

export default function Home({ games, page }) {
  return (
    <div className="w-[100%] bg-black px-5">
      <Header />
      <div className=" mt-10 w-[100%] h-[100%] flex ">
        <div className="w-[0%] hidden lg:flex lg:w-[17%]">
          <LeftHome />
        </div>
        <div className="w-[100%] ml-4 lg:w-[83%]">
          <RightHome gamesData={games} page={page} />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const res = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.API_KEY}&dates=2021-01-01,2021-03-30&page=${page}`
  );
  const data = await res.json();
  try {
    if (res.status === 200) {
      return {
        props: {
          games: data,
          page: +page,
        },
      };
    }
  } catch (error) {
    console.log(error);
  }
}
