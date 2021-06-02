import {Button, TextField, Typography, List, ListItem, ListItemText} from '@material-ui/core';
import {KeyboardDatePicker,KeyboardTimePicker} from '@material-ui/pickers'

import { Alert } from '@material-ui/lab';
import SaveIcon from '@material-ui/icons/Save';
import React from 'react';
import './App.css';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      todoList:[],
      title:"",
      content:"",
      startDate: null,
      startTime: null,
      endDate:null,
      endTime:null,

    }
  }
  checkValidate(){
    const{
      title,content,startDate,startTime,endDate,endTime
    }=this.state;
    if (!title) {
      alert("제목을 입력해주세요.");
      return false;
    } else if (!content) {
      alert("내용을 입력해주세요.");
      return false;
    } else if (!startDate) {
      alert("시작일을 입력해주세요.");
      return false;
    } else if (!startTime) {
      alert("시작 시간을 입력해주세요.");
      return false;
    } else if (!endDate) {
      alert("종료일을 입력해주세요.");
      return false;
    } else if (!endTime) {
      alert("종료 시간을 입력해주세요.");
      return false;
    } else if(title && content && startDate && startTime && endDate && endTime){
      return true
    }
  }

  checkValidate1(){
    const{startDate,endDate}=this.state;
    if(endDate<startDate){
      alert("시작일이 더 앞일 수는 없습니다");
      return false;
    }
    return true
  }



  saveTodoList(){
    if(this.checkValidate()){
      if(this.checkValidate1()){
    const {todoList,title,content,startDate,startTime,endDate,endTime}= this.state;
    todoList.push({title: title.trim(), content: content.trim(),startDate,startTime,endDate,endTime});
    this.setState({
      todoList,
      title:"",
      content:"",
      startDate:null,
      startTime:null,
      endDate:null,
      endTime:null,
    });}
  }
  }
  render(){
    return (
      <div className="App">
        <div className="header">TODO LIST</div>.
        <div className="input_area">
          
          <TextField label="제목" size="normal" margin="normal" fullWidth required 
          value={this.state.title}
          onChange={(e)=> {this.setState({title:e.target.value})}}
          />
          <TextField label="상세내용" size="normal" margin="normal" fullWidth multiline
          value={this.state.content}
          onChange={(e)=> {this.setState({content:e.target.value})}}
          />
        
        <KeyboardDatePicker
         disableToolbar
         variant="inline"
         format="yyyy/MM/DD"
         margin="normal"
         label="시작 예정일"
         value={this.state.startDate}
         onChange={(value)=> {this.setState({startDate:value})}}
         style = {{width: '50%'}}
         KeyboardButtonProps={{'aria-label': 'change date',}}
         />
   
         <KeyboardTimePicker
         margin="normal"
         label="시작시간"
         variant="inline"
         value={this.state.startTime}
         onChange={(value)=>{this.setState({startTime:value})}}
         style = {{width: '50%'}}
         KeyboardButtonProps={{'aria-label': 'change time',}}
         />
         <KeyboardDatePicker
         disableToolbar
         variant="inline"
         format="yyyy/MM/DD"
         margin="normal"
         label="종료 예정일"
         value={this.state.endDate}
         onChange={(value)=> {this.setState({endDate:value})}}
         style = {{width: '50%'}}
         KeyboardButtonProps={{'aria-label': 'change date',}}
         />
   
         <KeyboardTimePicker
         margin="normal"
         label="종료시간"
         variant="inline"
         value={this.state.endTime}
         onChange={(value)=>{this.setState({endTime:value})}}
         style = {{width: '50%'}}
         KeyboardButtonProps={{'aria-label': 'change time',}}
         />
        <Button 
        variant="outlined" 
        startIcon={<SaveIcon/>} 
        style={{float:'right'}}
        onClick={(value)=>this.saveTodoList()}
        >
          save
        </Button>
         </div>
        <div className="list_area">
         
        <List>
        {this.state.todoList.map((todoItem, idx) => {
          const{
            title,content,startDate,startTime,endDate,endTime
          }=todoItem;
          return(
            <ListItem key={idx} role={undefined} dense button>
              <ListItemText
              primary={title}
              secondary={startDate?.format('yyyy-MM-DD'+' '+startTime?.format('HH:MM')+'~'+endDate?.format('yyyy-MM-DD')+' '+endTime?.format('HH:MM'))}
             
              />
                  
               
            </ListItem>
          )
        })}
        

        </List>

        </div>
        <Typography variant="body2" color="textSecondary" align="center">
           {'Copyright ㏇ 김남경 '+new Date().getFullYear()+'.'}
          </Typography>
      </div>
     );

  }
  
}

export default App;
