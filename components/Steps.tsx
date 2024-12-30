import { useState } from "react";

interface StepsProps {
  className?: string;
}

const Steps: React.FC<StepsProps> = ({ className = "" }) => {
  const activeClasses: string =
    "bg-[#bce1ff] rounded-full flex items-center justify-center size-10 font-sans font-semibold";
  const inactiveClasses: string =
    "bg-transparent text-white rounded-full border border-1 flex items-center justify-center size-10 font-sans font-semibold";

  const [activeStep, setActiveStep] = useState(1);

  return (
    <main className={className}>
      <ul className="flex justify-between px-10">
        {[1, 2, 3, 4].map((step) => (
          <li
            key={step}
            className={activeStep === step ? activeClasses : inactiveClasses}
            onClick={() => setActiveStep(step)}
          >
            {step}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Steps;
