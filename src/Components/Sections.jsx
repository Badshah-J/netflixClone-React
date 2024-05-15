import React from "react";
import SectionImg from "./SectionImg";
import SectionInfo from "./SectionInfo";
function Sections() {
  let sectionTitle = [
    {
      id: "s1",
      secTitle: "Enjoy on your TV",
      info: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    },
    {
      id: "s2",
      secTitle: "Download your shows to watch offline",
      info: "Save your favourites easily and always have something to watch.",
    },
    {
      id: "s3",
      secTitle: "Watch everywhere",
      info: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    },
    {
      id: "s4",
      secTitle: "Create profiles for kids",
      info: "Send children on adventures with their favourite characters in a space made just for them—free with your membership.",
    },
  ];
  let imagesource = [
    {
      imgsrc:
        "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
      vrc: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v",
    },
    {
      imgsrc:
        "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
    },
    {
      imgsrc:
        "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png",
      vrc: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v",
    },
    {
      imgsrc:
        "https://occ-0-2087-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d",
    },
  ];

  return (
    <>
      {sectionTitle.map((val, i) => {
        return (
          <div
            className="mx-auto border-zinc-900 bg-[black] border-t-8 py-12 text-white "
            key={i}
          >
            <div className="grid md:grid-cols-2 grid-cols-1 max-w-[1170px] mx-auto px-12 items-center">
              {i == 1 || i == 3 ? (
                <>
                  <div className="relative md:order-1 order-2 ">
                    <SectionImg
                      imgsource={imagesource[i]}
                      index={i}
                    ></SectionImg>
                  </div>
                  <SectionInfo
                    className="md:order-2 order-1"
                    title={sectionTitle[i]}
                  ></SectionInfo>
                </>
              ) : (
                <>
                  <SectionInfo title={sectionTitle[i]}></SectionInfo>
                  <div className="relative ">
                    <SectionImg imgsource={imagesource[i]}></SectionImg>
                  </div>
                </>
              )}
              {/* <SectionInfo title={sectionTitle[i]}></SectionInfo>
              <div className="relative ">
                <SectionImg imgsource={imagesource[i]}></SectionImg>
              </div> */}
            </div>
          </div>
        );
      })}
      {/* <div className="mx-auto border-zinc-900 bg-[black] border-t-8 border-b-8 text-white ">
        <div className="grid md:grid-cols-2 grid-cols-1 max-w-[1170px]  mx-auto px-12 items-center">
          <SectionInfo title={sectionTitle[0]}></SectionInfo>
          <div className="relative ">
            <SectionImg imgsource={imagesource[0]}></SectionImg>
          </div>
        </div>
      </div>
      <div className="mx-auto border-zinc-900 bg-[black] border-t-8 border-b-8 text-white ">
        <div className="grid md:grid-cols-2 grid-cols-1 max-w-[1170px]  mx-auto px-12 items-center">
          <div className="relative ">
            <SectionImg imgsource={imagesource[1]}></SectionImg>
          </div>
          <SectionInfo title={sectionTitle[1]}></SectionInfo>
        </div>
      </div>
      <div className="mx-auto border-zinc-900 bg-[black] border-t-8 border-b-8 text-white ">
        <div className="grid md:grid-cols-2 grid-cols-1 max-w-[1170px]  mx-auto px-12 items-center">
          <SectionInfo title={sectionTitle[2]}></SectionInfo>
          <div className="relative ">
            <SectionImg imgsource={imagesource[2]}></SectionImg>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Sections;
