import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function App() {
  const [distance, setDistance] = useState(0);
  const [gassPrice, setGasPrice] = useState(0);
  const [result, setResult] = useState(0);
  const label = { inputProps: { "aria-label": "Switch demo" } };

  const [bothWays, setBothWays] = useState(false);
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
    const distanceNum = bothWays ? Number(distance) * 2 : Number(distance);
    const gasPriceNum = Number(gassPrice);

    const resultNum = Math.round((distanceNum / 18) * gasPriceNum);

    // console.log(resultNum);
    console.log("both ways is:", bothWays);
    setResult(resultNum);
  }

  function switchOnChange(e) {
    // console.log(e.target.checked);
    setBothWays(e.target.checked);
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
          <TextField
            id="outlined-number"
            label="Afstand i km"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            onChange={onChangeDistance}
          />
          {/* <TextField id="outlined-basic" label="Afstand i km" variant="outlined" onChange={onChangeDistance} Type="number" inputMode="numeric" /> */}

          <TextField
            id="outlined-number"
            label="Brændstof pris pr liter DKK"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            onChange={onChangeGasPrice}
          />

          <div>
            <small>Skal du køre begge veje?</small>
            <Switch {...label} onChange={switchOnChange} />
          </div>

          <Button variant="contained" onClick={calcResult}>
            Udregn pris
          </Button>
        </Box>
      </div>
    </>
  );
}

export default App;
