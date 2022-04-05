import { Box, Button, TextField } from "@mui/material"
import React from "react"
import { makeStyles } from "@mui/styles"

const InputComp = () => {
  const classes = styles()
  return (
    <Box className={classes.container}>
      <form>
        <TextField
          className={classes.input}
          id="outlined-basic"
          label="Plat"
          variant="outlined"
        />
        <TextField
          className={classes.input}
          id="outlined-basic"
          label="Mobile"
          variant="outlined"
        />
        <br />
        <Button className={classes.btn} type="submit" variant="outlined">
          SUBMIT
        </Button>
      </form>
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
  },
  btn: {
    marginLeft: "18vw !important",
  },
})

export default InputComp
