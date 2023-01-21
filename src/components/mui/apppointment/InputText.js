import React, { useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { AppointmentContext } from "../../../context/AppointmentContext";

export default function InputText() {
  const { data, handleData } = useContext(AppointmentContext);
  return (
    <Box
      component="div"
      sx={{
        "& .MuiTextField-root": {
          m: 1,
          width: { xs: 246, sm: 506 },
        },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue={data.message}
          onChange={(e) => {
            handleData({ ...data, message: e.target.value });
          }}
        />
      </div>
    </Box>
  );
}
