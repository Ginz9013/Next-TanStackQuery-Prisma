import { useMutation } from "@tanstack/react-query";
import { getTestApi } from "@/service/test/api";

const Mutation = () => {

  const mutation = useMutation({
    mutationFn: getTestApi,
  });

  const handleMutate = () => {
    mutation.mutate();
  }


  return (
    <>
      <button
        className="bg-white text-black py-1 px-2 rounded-sm"
        onClick={handleMutate}
      >
        Click
      </button>

      {mutation.status === "pending" && <p>Loading...</p>}
      {mutation.status === "error" && (
        <p>Error: {(mutation.error as Error).message}</p>
      )}
      {mutation.status === "success" && (
        <pre>{JSON.stringify(mutation.data, null, 2)}</pre>
      )}
    </>
  );
};

export default Mutation;