import Item from './item.js';
import { useState } from 'react';

let change_type;
let remove_completed_list;

const List = (props) => {
    // console.log('inlist');
    const [todos, setTodos] = useState(props.todos);
    const [complete, setComplete] = useState(props.complete);
    // let todos = props.todos;
    // let complete = props.complete;
    const handleclick = props.handleclick;
    const [type, setType] = useState('All');
    
    const remove_List = (index) => {
        props.remove_main(index);
        let todo_tmp = todos;
        let complete_tmp = complete;
        todo_tmp.splice(index, 1);
        complete.splice(index, 1);
        setTodos(todo_tmp);
        setComplete(complete_tmp);
    }

    remove_completed_list = () => {
        let new_todo = [];
        let new_complete = [];
        for (let i in complete){
            if (!complete[i]) {
                new_todo.push(todos[i]);
                new_complete.push(false);
            }
        }
        setTodos(new_todo);
        setComplete(new_complete);
        console.log(new_complete);
        console.log(new_todo);
        setComplete(complete.filter((e) => e === false));
        console.log(complete);
    }
    
    change_type = (t) => {
        // console.log(t)
        setType(t);
        console.log(complete);
        // console.log(t);
    }
    let listItems;
    if (type === 'All'){
        listItems = todos.map((todo) => {
            let index = todos.findIndex((element) => element === todo);
            return (
                <Item todo={todo} complete={complete[index]} handleclick={handleclick} index={index} remove={remove_List}/>
            )
        });    
    }

    else if (type === "Active"){
        listItems = todos.map((todo) => {
            let index = todos.findIndex((element) => element === todo);
            if (!complete[index]) {
                return (
                    <Item todo={todo} complete={complete[index]} handleclick={handleclick} index={index} remove={remove_List}/>
                )
            }
            else {
                return null;
            }
        });
    }

    else if (type === "Completed"){
        listItems = todos.map((todo) => {
            let index = todos.findIndex((element) => element === todo);
            if (complete[index]) {
                return (
                    <Item todo={todo} complete={complete[index]} handleclick={handleclick} index={index} remove={remove_List}/>
                )
            }
            else {
                return null;
            }
        });
    }
    
    
    return (
        <ul className="todo-app__list" id="todo-list">
            {listItems}
        </ul>
    )
};

export default List;
export { change_type , remove_completed_list};