import React from "react";
import { TbMathGreater } from "react-icons/tb";

function InputBtn() {
  return (
    <div>
      <p className="text-xl my-5">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="h-16 ">
        <input
          type="text"
          placeholder="Email Address"
          className="h-[80%] sm:w-80 w-[80%] bg-[rgba(0,0,0,0.6)] border-[1px] border-white rounded-[5px] p-[0px_10px] my-3"
        />
        <button className="h-[80%] w-48 bg-[red] relative text-white text-xl rounded-[5px] ml-2 font-bold p-[0px_10px] my-3">
          Get Started &gt;
          {/* <TbMathGreater className="absolute top-[15px] right-[5px]" /> */}
        </button>
      </div>
    </div>
  );
}

export default InputBtn;
