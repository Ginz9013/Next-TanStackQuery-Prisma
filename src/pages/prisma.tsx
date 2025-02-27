import { ChangeEvent, useState } from "react";

type FormType = {
  name: string;
  nickname: string;
  email: string;
}

const defaultFormValue = {
  name: "",
  nickname: "",
  email: "",
};

const Prisma = () => {
  const [data, setData] = useState(null);
  const [form, setForm] = useState<FormType>(defaultFormValue)

  enum FormValueTypes {
    name = 1,
    nickname = 2,
    email = 3,
  } 

  const changeFormValue = (type: FormValueTypes, newData: string) => {
    switch (type) {
      case FormValueTypes.name:
        setForm((prev: FormType) => ({...prev, name: newData}));
        break;
      case FormValueTypes.nickname:
        setForm((prev: FormType) => ({...prev, nickname: newData}));
        break;
      case FormValueTypes.email:
        setForm((prev: FormType) => ({...prev, email: newData}));
        break;
    }
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) =>
    changeFormValue(FormValueTypes.name, event.target.value);

  const handleNicknameChange = (event: ChangeEvent<HTMLInputElement>) =>
    changeFormValue(FormValueTypes.nickname, event.target.value);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) =>
    changeFormValue(FormValueTypes.email, event.target.value);

  const handleCreate = async () => {
    const res = await fetch('/api/user', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    
    const data = await res.json();

    if (data.status === 200) {
      setForm(defaultFormValue);
      alert(data.message?? "Create successfully!");
    } else {
      alert(data.message?? "Create Error!");
    }
  }

  const handleSubmit = async () => {
    const res = await fetch('/api/user');

    const data = await res.json();

    setData(data);
    console.log(data);
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      {/* ------ Form ------ */}
      <div className="flex flex-col my-4">
        {/* Name */}
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className="text-black rounded-md mx-2 p-1"
          value={form.name}
          onChange={handleNameChange}
        />
        {/* Nick Name */}
        <label htmlFor="nickname">Nick Name</label>
        <input
          type="text"
          id="nickname"
          className="text-black rounded-md mx-2 p-1"
          value={form.nickname}
          onChange={handleNicknameChange}
        />
        {/* Email */}
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          className="text-black rounded-md mx-2 p-1"
          value={form.email}
          onChange={handleEmailChange}
        />
      </div>

      {/* ------ Button ------ */}
      <div className="flex gap-4">
        <button
          type="button"
          className="bg-white text-black rounded-sm py-1 px-2 duration-150 hover:scale-105 active:scale-95"
          onClick={handleSubmit}
        >
          GET
        </button>
        <button
          type="button"
          className="bg-white text-black rounded-sm py-1 px-2 duration-150 hover:scale-105 active:scale-95"
          onClick={handleCreate}
        >
          POST
        </button>
      </div>

      {/* ------ Data ------ */}
      <pre>
        {
          data
            ? JSON.stringify(data, null, 2)
            : ""
        }
      </pre>
    </div>
  );
};

export default Prisma;