import Header from "../components/Header/Header";
import LeftHome from "../components/HomeComponents/LeftHome";
import RightHome from "../components/HomeComponents/RightHome";

export default function Home({ games, page }) {
  return (
    <div className="w-[100%] bg-[#101112] px-5">
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

export async function getServerSideProps({
  query: {
    page = 1,
    date = "",
    genres = "",
    search = "",
    tags = "",
    creators = "",
    developers = "",
    publishers = "",
    platforms = "",
  },
}) {
  const res = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.API_KEY}${
      date !== "" ? `&dates=${date}` : ""
    }&page=${page}${genres !== "" ? `&genres=${genres}` : ""}${
      search !== "" ? `&search=${search}` : ""
    }${tags !== "" ? `&tags=${tags}` : ""}${
      creators !== "" ? `&creators=${creators}` : ""
    }${developers !== "" ? `&developers=${developers}` : ""}${
      publishers !== "" ? `&publishers=${publishers}` : ""
    }${developers !== "" ? `&developers=${developers}` : ""}${
      platforms !== "" ? `&platforms=${platforms}` : ""
    }
    `
  );
  const data = await res.json();

  if (res.status < 300) {
    return {
      props: {
        games: data,
        page: +page,
      },
    };
  }

  return {
    redirect: {
      destination: "/404",
      permanent: false,
    },
  };
}
