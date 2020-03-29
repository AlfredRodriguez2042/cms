import React from "react"
import { Typography } from "@material-ui/core"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © kuro"}

      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}
