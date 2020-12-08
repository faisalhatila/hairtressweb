import React from "react";

const OurMentors = () => {
  const mentorsArray = [
    {
      id: 0,
      image: "assets/img/about/mentors/gepower.png",
      alt: "GE POWER",
    },
    {
      id: 0,
      image: "assets/img/about/mentors/bankofamerica.png",
      alt: "BANK OF AMERICA",
    },
    {
      id: 0,
      image: "assets/img/about/mentors/ExxonMobile.png",
      alt: "EXXON MOBILE",
    },
    {
      id: 0,
      image: "assets/img/about/mentors/ford.png",
      alt: "FORD",
    },
    {
      id: 0,
      image: "assets/img/about/mentors/conocophillips.png",
      alt: "CONOCO PHILLIPS",
    },
    {
      id: 0,
      image: "assets/img/about/mentors/hp.png",
      alt: "HP",
    },
    {
      id: 0,
      image: "assets/img/about/mentors/chevroncorporation.png",
      alt: "CHEVRON CORPORATION",
    },
    {
      id: 0,
      image: "assets/img/about/mentors/at&t.png",
      alt: "AT&T",
    },
    {
      id: 0,
      image: "assets/img/about/mentors/jpmorgan.png",
      alt: "JP MORGAN CHASE",
    },
    {
      id: 0,
      image: "assets/img/about/mentors/walmart.png",
      alt: "WALTMART",
    },
  ];
  return (
    <div className="ourMentorsMainDiv mt-5 mb-5">
      <div className="container">
        <div className="col pt-5">
          <h3 className="text-center ourMentorHeading">Our Mentor</h3>
          <div className="row justify-content-center">
            {mentorsArray.map((mentor, i) => {
              return (
                <div
                  className="col-12 col-md-3 d-flex justify-content-center mt-4 mb-4 p-2"
                  key={i}
                >
                  <img
                    alt={mentor.alt}
                    src={mentor.image}
                    className="logoImage"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMentors;
