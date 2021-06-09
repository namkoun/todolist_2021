import React from "react";

import { KeyboardDatePicker, KeyboardTimePicker } from "@material-ui/pickers";



const DateTimePicker = (props) => {
    return (
      <>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="yyyy/MM/DD"
          margin="normal"
          label={props.dateLabel}
          helperText="test"
          value={props.date}
          onChange={(value) => props.changeDate(value)}
          style={{ width: "50%" }}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          label={props.TimeLabel}
          variant="inline"
          value={props.time}
          onChange={(value) => props.changeTime(value)}
          style={{ width: "50%" }}
          KeyboardButtonProps={{
            "aria-label": "change time",
          }}
        />
      </>
    );
  };

  export default DateTimePicker; 