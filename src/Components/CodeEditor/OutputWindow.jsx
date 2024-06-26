import React from "react";

const OutputWindow = ({ outputDetails }) => {
  return (
    <div>
      <h1 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 mb-2">
        Output
      </h1>
      <div className="w-full h-56 bg-[#1e293b] rounded-md text-white font-normal text-sm overflow-y-auto p-3">
        {outputDetails ? <>{outputDetails}</> : null}
      </div>
    </div>
  );
};

export default OutputWindow;