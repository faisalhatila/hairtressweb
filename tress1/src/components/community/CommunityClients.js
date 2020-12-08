import React from "react";

const CommunityClients = (props) => {
  const communityClients = [
    {
      id: 0,
      image: "assets/img/community/gepower.png",
      alt: "CLIENT",
    },
    {
      id: 0,
      image: "assets/img/community/bankofamerica.png",
      alt: "CLIENT",
    },
    {
      id: 0,
      image: "assets/img/community/ExxonMobile.png",
      alt: "CLIENT",
    },
    {
      id: 0,
      image: "assets/img/community/ford.png",
      alt: "CLIENT",
    },
    {
      id: 0,
      image: "assets/img/community/conocophillips.png",
      alt: "CLIENT",
    },
    {
      id: 0,
      image: "assets/img/community/hp.png",
      alt: "CLIENT",
    },
  ];
  return (
    <div className="communityClientsMainDiv">
      <div className="container">
        <div className="row clientsLogoRow align-items-center">
          {communityClients.map((client, i) => {
            return (
              <div key={i} className="col-6 col-md">
                <img
                  alt={client.alt}
                  src={client.image}
                  style={{ maxWidth: "100%" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CommunityClients;
