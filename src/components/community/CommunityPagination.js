import React from "react";

const CommunityPagination = (props) => {
  const pageNo = [1, 2, 3, 4, 5, 6, 7, 8, 9, ">>"];
  return (
    <div className="communityPaginationMainDiv mb-4 d-none d-md-block">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-md">
            <div className="d-flex align-items-center">
              {pageNo.map((item, i) => {
                return (
                  <label className="noMargin paginationPageNo" key={i}>
                    {item}
                  </label>
                );
              })}
              <label className="noMargin ml-3 paginationLastButton">Last</label>
            </div>
          </div>
          <div className="col-12 col-md d-flex justify-content-end">
            <div className="d-flex align-items-center">
              <input
                type="text"
                className="enterPageNoInput"
                defaultValue={0}
              />
              <label className=" noMargin mr-2 ml-2"> of 100 pages</label>
              <label className="paginationLastButton noMargin">Go</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPagination;
