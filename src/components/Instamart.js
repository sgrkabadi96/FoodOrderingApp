import React, { useState } from "react";

const Section = ({ title, about, isVisible , setIsVisible , hide}) => {
  

  return (
    <div className=" container m-4 p-4 border border-black">
      <h4 className="font-bold flex justify-between">
        {title}{" "}
        {isVisible === true ? (
          <button
            className="bg-black font-light text-white  text-xl p-3 rounded-full"
            onClick={() => {
              hide()
            }}
          >
            Hide
          </button>
        ) : (
          <button
            className="bg-black font-light text-white  text-xl p-3 rounded-full"
            onClick={() => {
             setIsVisible()
            }}
          >
            Show More
          </button>
        )}
      </h4>

      {isVisible == true ? <p>{about}</p> : <></>}
    </div>
  );
};

export default function Instamart() {
  
  const [visibleSection , setVisibleSection] = useState("node")
  const hideAll = () => {
    setVisibleSection("none")
  }
 
  return (
    <div className="container ">
      <h1 className="font-bold">Welcome to Instamart Page</h1>

      <Section
        isVisible={visibleSection === "about"}
        setIsVisible = {() => {setVisibleSection("about")}}
        hide = {()=>{hideAll()}}
        title="About Instamart"
        about="Veniam exercitation sint anim nostrud laborum ut cupidatat Lorem consequat fugiat. Irure consequat sint non duis. Elit veniam et esse nostrud aliquip proident incididunt dolore. Reprehenderit non et irure voluptate ea.Nisi eu cupidatat fugiat ut laborum ad est exercitation occaecat consectetur. Do officia tempor non do occaecat duis velit sint irure et ea ea. Amet reprehenderit voluptate mollit elit voluptate duis minim anim cillum. Cillum qui veniam exercitation nulla.Esse aliquip voluptate commodo ex sint Lorem sunt minim Lorem culpa ad. Proident amet tempor consectetur exercitation enim. Occaecat laborum velit tempor esse ex occaecat dolore velit ea ad aute. Adipisicing cillum do sint est quis culpa consequat excepteur fugiat sint labore ipsum id nisi."
      />

      <Section
       isVisible = {visibleSection==="carrer"}
       setIsVisible = {() => {setVisibleSection("carrer")}}
       hide = {()=>{hideAll()}}
        title="Carrers at Instamart"
        about="Veniam exercitation sint anim nostrud laborum ut cupidatat Lorem consequat fugiat. Irure consequat sint non duis. Elit veniam et esse nostrud aliquip proident incididunt dolore. Reprehenderit non et irure voluptate ea.Nisi eu cupidatat fugiat ut laborum ad est exercitation occaecat consectetur. Do officia tempor non do occaecat duis velit sint irure et ea ea. Amet reprehenderit voluptate mollit elit voluptate duis minim anim cillum. Cillum qui veniam exercitation nulla.Esse aliquip voluptate commodo ex sint Lorem sunt minim Lorem culpa ad. Proident amet tempor consectetur exercitation enim. Occaecat laborum velit tempor esse ex occaecat dolore velit ea ad aute. Adipisicing cillum do sint est quis culpa consequat excepteur fugiat sint labore ipsum id nisi."
      />


      <Section
        isVisible = {visibleSection === "more"}
        setIsVisible = {() => {setVisibleSection("more")}}
        hide = {()=>{hideAll()}}
        title="More about Instamart "
        about="Veniam exercitation sint anim nostrud laborum ut cupidatat Lorem consequat fugiat. Irure consequat sint non duis. Elit veniam et esse nostrud aliquip proident incididunt dolore. Reprehenderit non et irure voluptate ea.Nisi eu cupidatat fugiat ut laborum ad est exercitation occaecat consectetur. Do officia tempor non do occaecat duis velit sint irure et ea ea. Amet reprehenderit voluptate mollit elit voluptate duis minim anim cillum. Cillum qui veniam exercitation nulla.Esse aliquip voluptate commodo ex sint Lorem sunt minim Lorem culpa ad. Proident amet tempor consectetur exercitation enim. Occaecat laborum velit tempor esse ex occaecat dolore velit ea ad aute. Adipisicing cillum do sint est quis culpa consequat excepteur fugiat sint labore ipsum id nisi."
      />
    </div>
  );
}
