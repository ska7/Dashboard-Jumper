import { TextField, Container, Button, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import React, { useState, useEffect } from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
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
    button: {
      color: "#379CCA",
      border: "1px solid #379CCA",
      width: "80%",
      height: "20%",
    },
    alert: {
      position: "absolute",
      color: "red",
      fontWeight: "bold",
      top: "20px",
      fontSize: "0.6em",
    },
  })
);

function App() {
  const [id, setId] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    if (id.length <= 5) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
      window.open(`https://accounts.bizzabo.com/128368/events/${id}`);
    }
  };

  useEffect(() => {
    // navigator.clipboard.readText().then((clipText) => {
    //   if (clipText(typeof Number) || clipText(typeof String)) {
    //     window.open(`https://accounts.bizzabo.com/128368/events/${clipText}`);
    //   } else {
    //     alert("Invalid ID, please copy the correct event ID");
    //   }
    // });
  }, []);

  const classes = useStyles();
  return (
    <Container className={classes.container} disableGutters maxWidth={false}>
      {showAlert ? (
        <Typography className={classes.alert}>
          Invalid ID, please make sure it's 6-digit long ;)
        </Typography>
      ) : null}
      <TextField
        value={id}
        onChange={(e) => setId(e.target.value)}
        color="primary"
        inputProps={{
          className: classes.inputProps,
          maxLength: "7",
          minLength: "6",
        }}
        className={classes.input}
        placeholder="Paste event ID here"
      />
      <Button
        variant="outlined"
        className={classes.button}
        onClick={handleClick}
      >
        GO
      </Button>
    </Container>
  );
}

export default App;

// https://www.youtube.com/watch?v=ot-dSAIEkK8
