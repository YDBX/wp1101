import { useEffect, useState } from 'react';
import { change_type, remove_completed_list } from './list';

let update;
let remove_footer;
let change_footer_count;

const Footer = (props) => {
  // console.log('footer');
  let todos = props.todos;
  let complete = props.complete;
  const [count, setCount] = useState(0);
  let work_count = props.count;
  const remove_completed_all = props.remove_completed;
  const [showButton, setShowButton] = useState(false);

  update = () => {
    console.log(work_count)
    console.log(todos.length);
    setShowButton(work_count !== todos.length);
  };

  const remove_completed = () => {
    let indices = [];
    for (let i in complete) {
      if (complete[i]) indices.push(i);
    }
    indices.reverse()
    remove_completed_all(indices);
    remove_completed_list();
    setShowButton(false);
    change_type("Clear Completed");
  };

  useEffect(() => {
    setShowButton(todos.length !== work_count);
    change_type("All");
  }, [props])


  if (showButton){
    return (
      <footer className="todo-app__footer" id="todo-footer">
        <div className="todo-app__total">
          {work_count + ' left'}
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
          {work_count + ' left'}
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

export { update, remove_footer, change_footer_count};

export default Footer;
