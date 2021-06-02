import React, {useState, useEffect} from 'react';
import { TextField, Typography, Button, List, ListItem, ListItemText, Dialog, DialogContent, DialogContentText } from '@material-ui/core';
import { KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import SaveIcon from '@material-ui/icons/Save';
import {Alert} from '@material-ui/lab';
import './App.css';

function NewApp(props) {
  const [todoList, setTodoList] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [isError, setIsError] = useState(false);

  const checkValidate = () =>{
    if(!title || !content || !startDate || !startTime || !endDate || !endTime){
      return false
    }
    return true
  }

  const saveTodoList = () => {
    if(checkValidate()){     
      setTodoList([...todoList, {title: title.trim(), content: content.trim(), startDate, startTime, endDate, endTime}]);
    }else{
      setIsError(true);
    }
  }

  return <div className="App">
    <div className="header">TODO LIST</div>
    <div className="input_area">
      <TextField 
        label="제목" size="normal" margin="normal" fullWidth required 
        value={title}
        onChange={(e)=> setTitle(e.target.value) } 
      />
      <TextField
      label="상세내용" size="normal" margin="normal" fullWidth multiline
      value={content}
      onChange={(e)=> setContent(e.target.value) }   
      />
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="yyyy/MM/DD"
        margin="normal"
        label="시작 예정일"
        helperText="test"
        value={startDate}
        onChange={(value)=> setStartDate(value)} 
        style = {{width: '50%'}}     
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
      <KeyboardTimePicker
        margin="normal"
        label="시작시간"
        variant="inline"
        value={startTime}
        onChange={(value)=> setStartTime(value)} 
        style = {{width: '50%'}}   
        KeyboardButtonProps={{
          'aria-label': 'change time',
        }}
      />
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="yyyy/MM/DD"
        margin="normal"
        label="종료 예정일"
        value={endDate}
        onChange={(value)=> setEndDate(value)} 
        style = {{width: '50%'}}     
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
      <KeyboardTimePicker
        margin="normal"
        label="종료시간"
        variant="inline"
        value={endTime}
        onChange={(value)=> setEndTime(value)} 
        style = {{width: '50%'}}   
        KeyboardButtonProps={{
          'aria-label': 'change time',
        }}
      />
      <Button
        variant="outlined"
        startIcon={<SaveIcon />}
        style={{float:'right'}}
        onClick={()=>saveTodoList()}
      >
        Save
      </Button>
      <Dialog
          open={isError}
          onClose={() => setIsError(false)}
        >
            <Alert variant="outlined" severity="error">
              Validation Check Error 발생!
            </Alert>
        </Dialog>
    </div>
    <div className="list_area">
      <List>
        {todoList.map((todoItem, idx) => {
          const {
            title, startDate, startTime, endDate, endTime
          } = todoItem;
          return (
            <ListItem key={idx} role={undefined} dense button>
              <ListItemText
                primary={title}
                secondary={startDate?.format('yyyy-MM-DD')+' '+startTime?.format('HH:MM')+' ~ '+endDate?.format('yyyy-MM-DD')+' '+endTime?.format('HH:MM')}
              />
            </ListItem>
          )
        })}
      </List>
    </div>
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © 홍길동 '+new Date().getFullYear()+'.'}         
    </Typography>
  </div>
}

export default NewApp; 