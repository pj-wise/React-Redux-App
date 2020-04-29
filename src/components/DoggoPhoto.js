import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDoggo } from "../store/actions";

const DoggoPhoto = ({ getDoggo, message, isFetching }) => {
  useEffect(() => {
    getDoggo();
  }, [getDoggo]);

  if (isFetching) {
    return (
      <h2>
        Hang tight, dogs are playing fetch
        <span role='img' aria-label='emoji'>
          😜
        </span>
      </h2>
    );
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "50%",
        margin: "0 auto"
      }}>
      {console.log(message)}
      <img src={message} alt='husky' />
      <button style={{ margin: "1em auto" }} onClick={getDoggo}>
        New Doggo Photo
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    message: state.message,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getDoggo }
)(DoggoPhoto);
