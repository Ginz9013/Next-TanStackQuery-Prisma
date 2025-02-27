const Prisma = () => {

  const handleSubmit = async () => {
    const res = await fetch('/api/user');

    const data = await res.json();

    console.log(data);
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <button
        type="button"
        className="bg-white text-black py-1 px-2 hover:scale-105 active:scale-95"
        onClick={handleSubmit}
      >
        GET
      </button>
    </div>
  );
};

export default Prisma;