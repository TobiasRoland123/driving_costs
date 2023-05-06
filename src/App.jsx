import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Box from "@mui/material/Box";

import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function App() {
  const [distance, setDistance] = useState(0);
  const [gassPrice, setGasPrice] = useState(0);
  const [result, setResult] = useState(0);

  function onChangeDistance(e) {
    // console.log(e.target.value);
    setDistance(e.target.value);
    // console.log(distance);
  }

  function onChangeGasPrice(e) {
    // console.log(e.target.value);
    setGasPrice(e.target.value);
  }

  function logNumbers() {
    console.log(distance);
    console.log(gassPrice);
  }

  function calcResult() {
    const distanceNum = Number(distance);
    const gasPriceNum = Number(gassPrice);

    const resultNum = Math.round((distanceNum / 18) * gasPriceNum);

    // console.log(resultNum);

    setResult(resultNum);
  }

  return (
    <>
      <div>
        <h1>Driving Costs</h1>

        {result === 0 ? <p></p> : <h2>Din køretur koster: {result} Dkk</h2>}

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Afstand i km" variant="outlined" onChange={onChangeDistance} Type="number" inputMode="numeric" />

          <TextField
            label="Brændstof pris pr liter"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: <InputAdornment position="start">Dkk</InputAdornment>,
            }}
            onChange={onChangeGasPrice}
          />

          <Button variant="contained" onClick={calcResult}>
            Udregn pris
          </Button>
        </Box>
      </div>
    </>
  );
}

export default App;
