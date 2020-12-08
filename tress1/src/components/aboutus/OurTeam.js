import React from "react";

const OurTeam = () => {
  const membersArray = [
    {
      id: 0,
      image: "assets/img/about/team/member1.png",
      name: "Kevin Vazquez",
      social: [
        "https://facebook.com",
        "https://twitter.com",
        "https://linkedin.com",
      ],
    },
    {
      id: 1,
      image: "assets/img/about/team/member2.png",
      name: "Taylor Cole",
      social: [
        "https://facebook.com",
        "https://twitter.com",
        "https://linkedin.com",
      ],
    },
    {
      id: 0,
      image: "assets/img/about/team/member3.png",
      name: "Richard Perry",
      social: [
        "https://facebook.com",
        "https://twitter.com",
        "https://linkedin.com",
      ],
    },
  ];
  return (
    <div className="ourTeamMainDiv mt-4">
      <div className="container">
        <div className="col">
          <h3 className="text-center ourTeamHeading">Our Team</h3>
          <div className="row">
            {membersArray.map((member, i) => {
              return (
                <div
                  className="col-12 col-md-4 d-flex flex-column align-items-center mt-4 mt-md-0"
                  key={i}
                >
                  <img alt={member.name} src={member.image} />
                  <h3 className="noMargin teamMemberName mt-3">
                    {member.name}
                  </h3>
                  <label className="noMargin teamMemberLabel">
                    Lorem Ipsum
                  </label>
                  <p className="noMargin text-center">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever
                  </p>
                  <div>
                    <i class="fab fa-facebook-f teamMemberFacebook mr-3"></i>
                    <i class="fab fa-twitter teamMemberTwitter mr-3"></i>
                    <i class="fab fa-linkedin-in teamMemberLinkedin"></i>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
