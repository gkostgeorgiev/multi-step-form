import { useState } from "react";

const PersonalInfo: React.FC = () => {
  const inputClasses: string =
    "block w-full p-2 px-4 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 text-lg font-ubuntu-medium tracking-tight";
  const labelClasses: string =
    "block text-sm font-ubuntu-regular text-marine-blue tracking-tight";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [errors, setErrors] = useState({
    email: "",
  });

  const validateEmail = (value: string) => {
    if (value.length === 0) return true;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
  };

  const handleNameKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const regex = /^[a-zA-Z\s.-]+$/;

    const inputValue = (e.target as HTMLInputElement).value;

    if ((e.key === "." || e.key === "-") && inputValue.length === 0) {
      e.preventDefault();
      return;
    }

    if (!regex.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setErrors((prev) => ({
      ...prev,
      email: validateEmail(value) ? "" : "Invalid email address.",
    }));
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNumber(value);
  };

  const handleNumberKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const regex = /^[0-9+]*$/;
    const allowedKeys = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "Tab",
      "Control",
    ];

    if (!regex.test(e.key) && !allowedKeys.includes(e.key)) {
      e.preventDefault();
    }

    const isPlusSign = e.key === "+";
    const shouldNotAllowToTypePlus =
      number.startsWith("+") || number.length > 0;
    if (isPlusSign && shouldNotAllowToTypePlus) {
      e.preventDefault();
    }
  };

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
          className={`${inputClasses}`}
          placeholder="e.g. Stephen King"
          value={name}
          onChange={handleNameChange}
          onKeyDown={handleNameKeyPress}
        />

        <label className={`${labelClasses} mt-3`}>Email Address</label>
        <input
          type="text"
          className={`${inputClasses}`}
          placeholder="e.g. stephenking@lorem.com"
          value={email}
          onChange={handleEmailChange}
        />
        {errors.email && (
          <p className="font-ubuntu-medium text-strawberry-red">
            {errors.email}
          </p>
        )}

        <label className={`${labelClasses} mt-3`}>Phone Number</label>
        <input
          type="text"
          className={inputClasses}
          placeholder="e.g. +1 234 567 890"
          value={number}
          onChange={handleNumberChange}
          onKeyDown={handleNumberKeyDown}
        />
      </div>
    </main>
  );
};

export default PersonalInfo;
