import React, { useState, useEffect } from "react";
import {  TextField,  Typography,  Button, List, ListItem,ListItemText, Dialog,DialogContent,DialogContentText,} from "@material-ui/core";

import "./App.css";
import InputArea from "./components/InputArea";
import ListArea from "./components/ListArea";





function NewApp(props) {
  const [todoList, setTodoList] = useState([]);
  
   
  return (
    <div className="App">
      <div className="header">TODO LIST</div>
      <InputArea todoList={todoList} setTodoList={setTodoList} />
      <ListArea list={todoList} />
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © 홍길동 " + new Date().getFullYear() + "."}
      </Typography>
    </div>
  );
}

export default NewApp;