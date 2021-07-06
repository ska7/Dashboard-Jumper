import { Typography, Container, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import jumperIcon from "./dashboardJumperIcon128.png";

import React, { useState } from "react";

const useStyles = makeStyles({
  container: {
    height: "200px",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    padding: 0,
    border: "1px solid black",
  },
  input: {
    display: "flex",
    justifyContent: "center",
    height: "30%",
    width: "80%",
  },
  inputProps: {
    fontSize: "1em",
    width: "100%",
    "&::placeholder": {
      fontSize: "1em",
    },
  },
  alert: {
    position: "absolute",
    color: "red",
    fontWeight: "bold",
    top: "20px",
    fontSize: "0.6em",
  },
});

function App() {
  const [error, setError] = useState("");
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const id = event.target.value;
    setValue(id);
    if (id.length >= 6 && id.length) {
      window.open(`https://accounts.bizzabo.com/144879/events/${id}`);
      setError("");
      setValue("");
    } else if (id.length === 0) {
      setError("");
    } else {
      setError("Invalid ID, make sure it's 6-digit long");
    }
  };

  const classes = useStyles();
  return (
    <Container className={classes.container}>
      {error ? (
        <Typography className={classes.alert}>{error}</Typography>
      ) : null}
      <TextField
        value={value}
        onChange={handleChange}
        className={classes.input}
        inputProps={{ className: classes.inputProps }}
      />
      <img src={jumperIcon} alt="jumper-img" className={classes.icon} />
    </Container>
  );
}

export default App;
