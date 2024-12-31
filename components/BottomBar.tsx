type Props = {};

const BottomBar = (props: Props) => {
  return (
    <div className="bg-white fixed bottom-0 w-full py-6 px-4 grid grid-cols-7">
      <div className="col-span-2 flex items-center text-light-gray font-ubuntu-bold text-lg tracking-tight">
        Go back
      </div>
      <button className="font-ubuntu-regular text-white bg-navyBlue py-3 rounded col-span-2 col-start-6">
        Next Step
      </button>
    </div>
  );
};

export default BottomBar;
