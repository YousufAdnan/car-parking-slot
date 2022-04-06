import { Box, Button, TextField, Alert } from "@mui/material"
import React, { useState } from "react"
import { makeStyles } from "@mui/styles"
import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"
import {
  getAuth,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth"

import initializeFirebase from "../firebase/firebase.init"

initializeFirebase()
const InputComp = () => {
  const classes = styles()
  const [number, setNumber] = useState("")
  const [error, setError] = useState("")
  const [otp, setOtp] = useState("")
  const [flag, setFlag] = useState(false)
  const [result, setResult] = useState({})
  const [success, setSuccess] = useState("")

  const getOtp = async (e: any) => {
    e.preventDefault()
    setError("")
    if (number === "" || number === undefined)
      return setError("Please enter a valid Phone Number!")

    try {
      const response = await setUpRecaptha(number)
      console.log(response)
      setResult(response)
      setFlag(true)
    } catch (err) {
      setError(err.message)
    }
  }

  const verifyOtp = async (e: any) => {
    e.preventDefault()
    console.log(otp)
    if (otp === "" || otp === null) return
    try {
      setError("")
      await result.confirm(otp)
      setSuccess("Authentication Successfully")
    } catch (err) {
      setError(err.message)
    }
  }

  function setUpRecaptha(number: any) {
    const auth = getAuth()
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    )
    recaptchaVerifier.render()
    return signInWithPhoneNumber(auth, number, recaptchaVerifier)
  }

  return (
    <Box>
      {error && (
        <Alert className={classes.alert} severity="warning">
          {error}
        </Alert>
      )}
      {success && (
        <Alert className={classes.alert} severity="success">
          {success}
        </Alert>
      )}
      <Box className={classes.container}>
        <form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
          <TextField
            className={classes.input}
            id="outlined-basic"
            label="Plat number"
            variant="outlined"
          />
          <PhoneInput
            className={classes.input1}
            defaultCountry="BD"
            placeholder="Enter phone number"
            value={number}
            onChange={setNumber}
          />
          <div className={classes.captcha} id="recaptcha-container"></div>
          <br />
          <Button className={classes.btn} type="submit" variant="outlined">
            SUBMIT
          </Button>
        </form>

        <form
          className={classes.verifyContainer}
          onSubmit={verifyOtp}
          style={{ display: flag ? "block" : "none" }}
        >
          <TextField
            className={classes.input}
            id="outlined-basic"
            label="OTP"
            variant="outlined"
            onChange={e => setOtp(e.target.value)}
          />
          <br />
          <TextField
            className={classes.input}
            id="outlined-basic"
            label="Parking number"
            variant="outlined"
          />
          <br />
          <Button className={classes.btn} type="submit" variant="outlined">
            Verify OTP
          </Button>
        </form>
      </Box>
    </Box>
  )
}

const styles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: "white",
    margin: "2vw !important",
    width: "28vw",
  },
  input1: {
    backgroundColor: "white",
    margin: "2vw !important",
    padding: "1vw !important",
  },
  btn: {
    marginLeft: "13vw !important",
  },
  captcha: {
    marginLeft: "5vw",
  },
  alert: {
    width: "28vw !important",
    marginLeft: "34vw !important",
  },
})

export default InputComp
