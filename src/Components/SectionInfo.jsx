import React from "react";

function SectionInfo(props) {
  return (
    <div className={props.className}>
      <h1 className="text-5xl font-black mt-20">{props.title.secTitle}</h1>
      <p className="text-xl mt-3">{props.title.info}</p>
    </div>
  );
}

export default SectionInfo;
