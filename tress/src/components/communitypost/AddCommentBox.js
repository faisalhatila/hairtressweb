import React from "react";

const AddCommentBox = (props) => {
  return (
    <div className="addCommentBoxMainDiv">
      <h3 className="text-center blackFont">Add Comment</h3>
      <div className="addCommentBoxDiv">
        <div className="form-group">
          <textarea
            className="form-control addCommentTextArea"
            rows="3"
            placeholder="Write comment"
          ></textarea>
        </div>
        <div
          className="d-flex justify-content-end"
          style={{ transform: "translateY(30px)" }}
        >
          <img src="assets/img/community/communityPost/clipIcon.png" />
        </div>
        <div className="d-flex justify-content-center ">
          <label className="noMargin submitCommentButton text-center">
            Submit
          </label>
        </div>
      </div>
    </div>
  );
};

export default AddCommentBox;
