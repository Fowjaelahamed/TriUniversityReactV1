import React from "react";
import Breadcrumb from "../Breadcrumb";
import SocialIcon from "../SocialIcon";
import StudentButton from "../StudentButton";

function Student() {
    const buttonName = ["Student Portal","Blended Learning Center","Notice Board","Acamedic Calender","Library","Coordination Officer","Scholarship","Talent Hunt","Internship Portal","Credit Transfer Guidelines"];
  return (
    <>
      <Breadcrumb name="Students" />
      <section className="container my-3">
        <div className="row g-2 mb-4 justify-content-center">
        {buttonName.map((i,j)=><StudentButton key={j} name={i} />)}
        </div>
       <SocialIcon />
      </section>
    </>
  );
}
export default Student;
