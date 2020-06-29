import React from "react";
import Container from "@material-ui/core/Container";
import { Button } from "@material-ui/core";

const DarkModeToggle = (props) => {
  return (
    <Container style={{ textAlign: "center" }}>
      <Button variant="contained" onClick={props.greetHandler}>
        Toggle Dark Mode
      </Button>
    </Container>
  );
};

export default DarkModeToggle;
