import { useEffect, useState } from "react";

const PersonalInfo: React.FC = () => {
  const inputClasses: string =
    "block w-full p-2 px-4 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 text-lg font-ubuntu-medium tracking-tight";
  const labelClasses: string =
    "block text-sm font-ubuntu-regular text-marine-blue tracking-tight";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  return (
    <main className="p-4">
      <h1 className="font-ubuntu-bold text-3xl mt-4 mb-6">Personal info</h1>
      <h2 className="font-ubuntu-regular text-xl w-full text-cool-gray tracking-tight">
        Please provide your name, email address, and phone number.
      </h2>
      <div className="mt-4">
        <label className={labelClasses}>Name</label>
        <input
          type="text"
          className={`${inputClasses} mb-3`}
          placeholder="e.g. Stephen King"
          onChange={(e) => setName(e.target.value)}
        />
        <label className={labelClasses}>Email Address</label>
        <input
          type="text"
          className={`${inputClasses} mb-3`}
          placeholder="e.g. stephenking@lorem.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className={labelClasses}>Phone Number</label>
        <input
          type="text"
          className={`${inputClasses} mb-5`}
          placeholder="e.g. +1 234 567 890"
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
    </main>
  );
};

export default PersonalInfo;
