import React from "react";
import { Button } from "react-native";
const ButtonComponent = ({ title, func }) => {
  return (
    <>
      <Button title={title} onPress={func} />
    </>
  );
};
ButtonComponent.defaultProps = {
  title: "Button",
};
export default ButtonComponent;
