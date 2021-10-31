import Item from './item.js';
import { useEffect, useState } from 'react';
import { render } from 'react-dom';

let change_type;
let remove_completed_list;

const List = (props) => {
    // console.log('list');
    const [todos, setTodos] = useState(props.todos);
    const [complete, setComplete] = useState(props.complete);
    const handleclick = props.handleclick;
    const [type, setType] = useState('All');
    
    const remove_List = (todo) => {
        props.remove_main(todo);
        setTodos(todos);
        setComplete(complete);
        console.log(todos);
        console.log(complete);
    }
    
    change_type = (t) => {
        setType(t);
    }

    remove_completed_list = () => {
        // setType("Clear Completed");
        // setTodos(todos);
        // setComplete(complete);
        console.log(complete);
        console.log(todos);
    }

    useEffect(() => {
        setTodos(props.todos);
        setComplete(props.complete);
        // console.log(123);
    }, [props]);
    
    return (
        <ul className="todo-app__list" id="todo-list">
            { (type === 'All') ? (
                todos.map((todo) => {
                    // console.log(todo);
                    let index = todos.findIndex((element) => element === todo);
                    return (
                        <Item todo={todo} complete={complete[index]} handleclick={handleclick} index={index} remove={remove_List} style={complete[index] ? {textDecoration: 'line-through', 'opacity': '0.5'} : {textDecoration: 'none'}} checked={complete[index] ? true:false}/>
                    )
                }
            )) : ((type === 'Active' || type === 'Clear Completed') ? (
                    todos.map((todo) => {
                        let index = todos.findIndex((element) => element === todo);
                        console.log(todo);
                        console.log(index);
                        console.log(complete[index]);
                        if (!complete[index]) {
                            return (
                                <Item todo={todo} complete={complete[index]} handleclick={handleclick} index={index} remove={remove_List} style={complete[index] ? {textDecoration: 'line-through', 'opacity': '0.5'} : {textDecoration: 'none'}} checked={complete[index] ? true:false}/>
                            )
                        }
                        else {
                            return null;
                        }
                    }
                )) : (todos.map((todo) => {
                        let index = todos.findIndex((element) => element === todo);
                        if (complete[index]) {
                            return (
                                <Item todo={todo} complete={complete[index]} handleclick={handleclick} index={index} remove={remove_List} style={complete[index] ? {textDecoration: 'line-through', 'opacity': '0.5'} : {textDecoration: 'none'}} checked={complete[index] ? true:false}/>
                            )
                        }
                        else {
                            return null;
                        }
                    }
                )
            ))
            }
        </ul>
    )
};

export default List;
export { change_type, remove_completed_list };