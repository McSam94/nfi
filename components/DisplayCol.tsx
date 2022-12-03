import { FC } from "react";

interface DisplayColProps {
  label: string;
  value: string;
}

const DisplayCol: FC<DisplayColProps> = ({ label, value }) => {
  return (
    <div className="flex flex-col items-center space-y-3">
      <div className="text-2xl text-black/50">{label}</div>
      <div className="text-xl font-bold">{value}</div>
    </div>
  );
};

export default DisplayCol;
