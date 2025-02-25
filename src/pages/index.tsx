import { useQuery } from "@tanstack/react-query";
import { getTestApi } from "@/service/test/api";

const Home = () => {

  const { data, error, isLoading } = useQuery({
    queryKey: ["getTestApi"],
    queryFn: getTestApi
  });

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Ad Test</h1>
      {/* <button
        onClick={getTestApi}
        className="bg-white text-black py-1 px-2 rounded-sm hover:scale-105 active:scale-95"
      >
        Test
      </button> */}
      <p>{data.message}</p>
    </div>
  );
}
 export default Home;