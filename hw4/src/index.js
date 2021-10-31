import React, { useEffect, useState } from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import Header from './Components/header.js';
// import Main from './Components/main.js';
import List from './Components/list.js';
import Footer, { change_footer_count } from './Components/footer.js';
import reportWebVitals from './reportWebVitals';

const All = () => {

  const [todos, setTodos] = useState([]);
  const [complete, setComplete] = useState([]);
  const [left_work_count, setWork_Count] = useState(0);
  const [todo, setTodo] = useState('');

  const handleClick = (todo) => {
    console.log(todos);
    let index = todos.findIndex((element) => todo === element);
    let complete_tmp = complete;
    complete_tmp[index] = !complete_tmp[index];
    setComplete(complete_tmp);
    console.log(index);
    console.log(complete);
    console.log(left_work_count);
    if (complete[index]){
      console.log('true')
      let tmp = left_work_count - 1
      console.log(tmp);
      setWork_Count(tmp);
      console.log(left_work_count);
    }
    else {
      setWork_Count(left_work_count + 1);
    }
    console.log(complete);
    console.log(left_work_count);
    console.log(todos);
  };
  
  const handleInput = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      let todo_tmp = todos;
      let complete_tmp = complete;

      if (todos.includes(todo)){
        alert("The todo-list has been added.");
      }
      else if (todo === ''){
        alert('Your input is empty.');
      }
      else{
        todo_tmp.push(todo);
        complete_tmp.push(false);
        setTodos(todo_tmp);
        setComplete(complete_tmp);
        setWork_Count(left_work_count + 1);
        setTodo('');
      }
    }
  }

  // check
  const remove_Main = (todo) => {
    let index = todos.findIndex((element) => element === todo);
    let todos_tmp = todos;
    let complete_tmp = complete;
    console.log(todo);
    console.log(index);
    console.log(complete[index]);
    if(!complete[index]) {
      setWork_Count(left_work_count - 1);
    }
    else {
      setWork_Count(left_work_count);
    }
    todos_tmp.splice(index, 1);
    complete_tmp.splice(index, 1);
    setTodos(todos_tmp);
    setComplete(complete_tmp);
    console.log(todos);
    console.log(complete);

  };

  const remove_completed_all = (indices) => {
    let new_todo = todos;
    let new_complete = complete;
    for (let index of indices) {
      new_complete.splice(index, 1);
      new_todo.splice(index, 1);
    }
    setTodos(new_todo);
    setComplete(new_complete);
  }

  if (todos.length === 0){
    return (
      <div id="root" className="todo-app__root">
        <Header />
        <section className="todo-app__main">
          <input className="todo-app__input" placeholder="What needs to be done?" value={todo} onKeyDown={handleInput} onChange={(e) => setTodo(e.target.value)}></input>
        </section>
      </div>
    );  
  }
  else {
    return (
      <div id="root" className="todo-app__root">
        <Header />
        <section className="todo-app__main">
          <input className="todo-app__input" placeholder="What needs to be done?" value={todo} onKeyDown={handleInput} onChange={(e) => setTodo(e.target.value)}></input>
          <List todos={todos} complete={complete} handleclick={handleClick} remove_main={remove_Main}/>
        </section>
        <Footer todos={todos} complete={complete} remove_completed={remove_completed_all}  count={left_work_count}/>
      </div>
    );
  }
};


ReactDOM.render(
  <All />,
  document.getElementsByTagName('div')[0]
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();