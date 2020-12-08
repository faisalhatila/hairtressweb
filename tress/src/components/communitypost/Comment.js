import React from "react";

const Comment = () => {
  return (
    <div className="container mt-3">
      <div className="col">
        <div className="row">
          <div className="col-4 col-md-2 d-none-d-md-block">
            <img
              alt="avatar"
              src="assets/img/community/communityPost/avatar.png"
              style={{
                maxWidth: "100%",
                width: "100px",
                borderRadius: "50%",
                padding: "5px 15px",
                backgroundColor: "#888",
              }}
            />
          </div>
          <div className="col-12 col-md-10 d-none-d-md-block">
            <h3
              className="noMargin blackFont"
              style={{ fontSize: "23px", fontWeight: 600 }}
            >
              Brandi Mason
            </h3>
            <p className="darkBlueFont noMargin" style={{ fontSize: "14px" }}>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system,
            </p>
            <div className="d-flex justify-content-between">
              <label style={{ fontSize: "14px" }}>Dated: 4 Sep 2020</label>
              <label className="blackFont" style={{ fontSize: "14px" }}>
                Reply
              </label>
            </div>
          </div>
        </div>
        <div className="offset-2 col-10 mt-3">
          <div className="row">
            <div className="col-4 col-md-2 d-none-d-md-block">
              <img
                alt="avatar"
                src="assets/img/community/communityPost/avatar.png"
                style={{
                  maxWidth: "100%",
                  width: "60px",
                  borderRadius: "50%",
                  padding: "5px 15px",
                  backgroundColor: "#888",
                  height: "60px",
                }}
              />
            </div>
            <div className="col-12 col-md-10 d-none-d-md-block">
              <h3
                className="noMargin blackFont"
                style={{ fontSize: "21px", fontWeight: 600 }}
              >
                Brandi Mason
              </h3>
              <p className="darkBlueFont noMargin" style={{ fontSize: "11px" }}>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system,
              </p>
              <div className="d-flex justify-content-between">
                <label style={{ fontSize: "11px" }}>Dated: 4 Sep 2020</label>
                <label className="blackFont" style={{ fontSize: "11px" }}>
                  Reply
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
{
  /* <div className="row">
              <div className="col-4 col-md-2 d-none-d-md-block">
                <img
                  alt="avatar"
                  src="assets/img/community/communityPost/avatar.png"
                  style={{
                    maxWidth: "100%",
                    width: "100px",
                    borderRadius: "50%",
                    padding: "5px 15px",
                    backgroundColor: "#888",
                  }}
                />
              </div>
              <div className="col-12 col-md-10 d-none-d-md-block">
                <h3
                  className="noMargin blackFont"
                  style={{ fontSize: "21px", fontWeight: 600 }}
                >
                  Brandi Mason
                </h3>
                <p
                  className="darkBlueFont noMargin"
                  style={{ fontSize: "11px" }}
                >
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system,
                </p>
                <div className="d-flex justify-content-between">
                  <label style={{ fontSize: "11px" }}>Dated: 4 Sep 2020</label>
                  <label className="blackFont" style={{ fontSize: "11px" }}>
                    Reply
                  </label>
                </div>
              </div>
            </div> */
}
