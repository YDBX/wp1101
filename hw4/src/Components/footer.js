import { useState } from 'react';
import { remove_completed_item } from './item';
import { change_type, remove_completed_list } from './list';
import { remove_completed_all } from '../index';

let update;
let remove_footer;
let change_footer_count;

const Footer = (props) => {
  // const [complete, setComplete] = useState(props.complete);
  let complete = props.complete;
  const [count, setCount] = useState(1);
  const [work_count, setWork_count] = useState(1);

  update = (index) => {
    if (complete[index]) setCount(count - 1);
    else setCount(count + 1);
  };

  change_footer_count = (num1, num2) => {
    setCount(count + num1);
    setWork_count(work_count + num2);
  }

  const remove_completed = () => {
    remove_completed_all();
    remove_completed_list();
    remove_completed_item();
  };

  if (work_count !== 0){
    if (complete.includes(true)){
      return (
        <footer className="todo-app__footer" id="todo-footer">
          <div className="todo-app__total">
            {count + ' left'}
          </div>
          <ul className="todo-app__view-buttons">
            <button onClick={() => change_type("All")}>All</button>
            <button onClick={() => change_type('Active')}>Active</button>
            <button onClick={() => change_type('Completed')}>Completed</button>
          </ul>
          <div className="todo-app__clean">
            <button onClick={() => remove_completed()}>Clear Completed</button>
          </div>
        </footer>
      );
    }
    else {
      return (
        <footer className="todo-app__footer" id="todo-footer">
          <div className="todo-app__total">
            {count + ' left'}
          </div>
          <ul className="todo-app__view-buttons">
            <button onClick={() => change_type("All")}>All</button>
            <button onClick={() => change_type('Active')}>Active</button>
            <button onClick={() => change_type('Completed')}>Completed</button>
          </ul>
        </footer>
      );
    }
  }
  else {
    return null;
  }
  
}

export { update, remove_footer, change_footer_count};

export default Footer;
