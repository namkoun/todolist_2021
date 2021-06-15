import React, { useState, useEffect } from "react";
import {  TextField,  Typography,  Button, List, ListItem,ListItemText, Dialog,DialogContent,DialogContentText,} from "@material-ui/core";

import SaveIcon from "@material-ui/icons/Save";
import { Alert } from "@material-ui/lab";
import "../App.css";
import DateTimePicker from "./DateTimePicker";

const InputArea = (props) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [startDate, setStartDate] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [isError, setIsError] = useState(false);
    const { todoList, setTodoList } = props;
  
    useEffect(() => {
     
      alert("등록");
     },[todoList]);


    const checkValidate = () => {
      if (
        !title ||
        !content ||
        !startDate ||
        !startTime ||
        !endDate ||
        !endTime
      ) {
        return false;
      }
      return true;
    };
  
    const saveTodoList = () => {
      if (checkValidate()) {
        setTodoList([
          ...todoList,
          {
            title: title.trim(),
            content: content.trim(),
            startDate,
            startTime,
            endDate,
            endTime,
          },
        ]);
      } else {
        setIsError(true);
      }
    };
  
    return (
      <div className="input_area">
        <TextField
          label="제목"
          size="normal"
          margin="normal"
          fullWidth
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="상세내용"
          size="normal"
          margin="normal"
          fullWidth
          multiline
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <DateTimePicker
          dateLabel="시작 예정일"
          date={startDate}
          TimeLabel="시작시간"
          time={startTime}
          changeDate={setStartDate}
          changeTime={setStartTime}
        />
        <DateTimePicker
          dateLabel="종료 예정일"
          date={endDate}
          TimeLabel="종료시간"
          time={endTime}
          changeDate={setEndDate}
          changeTime={setEndTime}
        />
        <Button
          variant="outlined"
          startIcon={<SaveIcon />}
          style={{ float: "right" }}
          onClick={() => saveTodoList()}
        >
          Save
        </Button>
        <Dialog open={isError} onClose={() => setIsError(false)}>
          <Alert variant="outlined" severity="error">
            Validation Check Error 발생!
          </Alert>
        </Dialog>
      </div>
    );
  };


  export default InputArea; 