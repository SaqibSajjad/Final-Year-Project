import React, { useEffect } from "react";

const Protected = (props) => {
  const { Component } = props;
  useEffect(() => {});
  return (
    <div>
      <Component />
    </div>
  );
};

export default Protected;
