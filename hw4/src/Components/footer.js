import { useEffect, useState } from 'react';

let update;
let left_work = () => "";

const Footer = (props) => {
  const todos = props.todos;
  const [complete, setComplete] = useState(props.complete);
  const [count, setCount] = useState(1);
  const buttons = ['All', 'Active', 'Completed'];

  update = (index) => {
    console.log(index);
    let complete_tmp = complete;
    // complete_tmp[index] = !complete_tmp[index];
    console.log(complete_tmp);
    setComplete(complete_tmp);
    console.log(complete_tmp[index]);
    if (complete_tmp[index]){
      setCount(count - 1);
    }
    else {
      setCount(count + 1);
    }
  };

  left_work = () => {
    setCount(count + 1);
  }
  return (
    <footer className="todo-app__footer" id="todo-footer">
      <div className="todo-app__total">
        {count + ' left'}
      </div>
      <ul className="todo-app__view-buttons">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </ul>
      <div className="todo-app__clean">
        <button>Clear Completed</button>
      </div>
    </footer>
  );
  
}

export {update, left_work};

export default Footer;
