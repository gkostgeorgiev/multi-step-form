import { Switch as MuiSwitch } from "@mui/material";
import { styled } from "@mui/material/styles";
import Switch from "react-switch";
import { useState } from "react";

type Props = {};

const SelectYourPlan = (props: Props) => {
  const [plan, setPlan] = useState("monthly"); // Default to "monthly"

  const AntSwitch = styled(MuiSwitch)(({ theme }) => ({
    width: 50, // Enlarge the switch
    height: 28, // Increase height of the switch
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 20, // Increase the thumb size when active
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(26px)", // Adjust the position of the thumb when checked
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 5, // Adjust the padding for a larger thumb area
      "&.Mui-checked": {
        transform: "translateX(22px)", // Make sure the thumb stays at the right position when checked
        color: "#fff", // White thumb when checked
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: "#15498a", // Keep the background color navy blue
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 16, // Increase the thumb width
      height: 16, // Increase the thumb height
      borderRadius: 10, // Make it a circle
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 34 / 2, // Ensure track is rounded
      opacity: 1,
      backgroundColor: "#15498a", // Set background color to navy blue
      boxSizing: "border-box",
    },
  }));

  return (
    <main className="p-4">
      <h1 className="font-ubuntu-bold text-3xl mt-4 mb-6 text-marine-blue">
        Select your plan
      </h1>
      <h2 className="font-ubuntu-regular text-xl w-full text-cool-gray tracking-tight">
        You have the option of monthly or yearly billing.
      </h2>
      <div className="py-4 bg-[#f8f9fe] w-full rounded mt-4 flex justify-between">
        <p>Monthly</p>
        <AntSwitch
          checked={plan === "yearly"}
          inputProps={{ "aria-label": "plan switch" }}
          onChange={() => {
            setPlan(plan === "yearly" ? "monthly" : "yearly"); // Toggle between 'monthly' and 'yearly'
          }}
        />
        <Switch
          checked={plan === "yearly"}
          onChange={() => {
            setPlan(plan === "yearly" ? "monthly" : "yearly"); // Toggle between 'monthly' and 'yearly'
          }}
        />
        <p>Yearly</p>
      </div>
    </main>
  );
};

export default SelectYourPlan;
