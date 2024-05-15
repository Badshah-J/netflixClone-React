import React from "react";

function SectionImg(props) {
  console.log(props.index == 1 || props.index == 3);
  var clsname;
  return (
    <>
      <img className="relative z-10 " src={props.imgsource.imgsrc} alt="" />

      {props.imgsource.vrc !== undefined ? (
        <>
          <video
            className="absolute w-[80%] left-[10%] bottom-[20%] z-0 "
            itemType="video/mp4/"
            autoPlay
          >
            <source src={props.imgsource.vrc} />
          </video>
        </>
      ) : (
        <> </>
      )}
    </>
  );
}

export default SectionImg;

// w-63 left-19 bottom-44
