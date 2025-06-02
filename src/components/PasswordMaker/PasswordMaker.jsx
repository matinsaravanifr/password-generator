import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
const character =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

export default function PasswordMaker() {
  const [length, setlength] = useState(0);
  const [password, setpassword] = useState("");
  const generatePassword = () => {
    if (length < 4 || length > 32) {
      alert("عدد طول رمز شما باید حداقل 4 کاراکتر و حداکثر 32 کاراکتر باشد");
      return;
    }
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * character.length);
      result += character[randomIndex];
    }
    setpassword(result);
  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    toast("رمز عبور با موفقیت کپی شد!");
  };

  return (
    <div className="w-full max-w-[600px] mx-auto h-auto bg-amber-300 rounded-2xl p-6 shadow-md">
      <div className="w-full flex flex-col items-center">
        <h1 className="font-bold mb-8 text-center text-lg sm:text-xl md:text-2xl">
          طول رمز مدنظر خود را وارد نمایید
        </h1>
        <input
          className="w-[80%] sm:w-[300px] h-8 border rounded-2xl text-center text-base"
          onChange={(e) => {
            setlength(Number(e.target.value));
          }}
          type="number"
          required
        />
        <p className="mt-5 text-lg">{password}</p>
        <div className="flex flex-col sm:flex-row gap-4 items-center mt-5">
          <button
            className="w-[200px] h-10 cursor-pointer rounded-2xl bg-amber-500 hover:bg-amber-400 transition"
            onClick={generatePassword}
          >
            ساخت پسورد
          </button>
          <button
            onClick={copyToClipboard}
            className="w-[200px] h-10 cursor-pointer rounded-2xl bg-amber-500 hover:bg-amber-400 transition"
          >
            کپی
          </button>
          <Toaster />
        </div>
      </div>
    </div>
  );
}
