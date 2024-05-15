import React from "react";
import LangBtn from "./LangBtn";

let fotterdata = ["FAQ", "Investor Relations", "Privacy", "Speed Test"];
function Footer() {
  return (
    <div className="mx-auto border-zinc-900 bg-[black] border-t-8 p-12 text-white ">
      <p>
        Questions?<a href="#"> Call 000-800-919-1694</a>
      </p>
      <div>
        <ul>
          {fotterdata.map((val, idx) => {
            return <li key={idx}>{val}</li>;
          })}
        </ul>
      </div>
      <LangBtn />
    </div>
  );
}

export default Footer;
