import img_x from '../img/x.png'
import { useState } from 'react';
import { update } from './footer.js';

const Item = (props) => {
    const todo = props.todo;
    const complete = props.complete;
    const handleclick = props.handleclick;
    const remove_todo = props.remove_todo;
    const index = props.index;
    const [style, setStyle] = useState({textDecoration: 'none'});

    const handle_checkbox = (index) => {
        handleclick(index);
        update(index);
        if (style['textDecoration'] === 'none'){
            setStyle({textDecoration: 'line-through', 'opacity': '0.5'});
        }
        else {
            setStyle({textDecoration: 'none'});
        }
    }

    const handle_delete = (index) => {
        remove_todo(index);
    }
    
    return (
        <li className="todo-app__item" key={todo}>
            <div className="todo-app__checkbox">
                <input id={index} type="checkbox" onClick={() => handle_checkbox(index)}></input>
                <label for={index}></label>
            </div>
            <h1 className="todo-app__item-detail" style={style}>
                {todo}
            </h1>
            <img src={img_x} className="todo-app__item-x" onClick={() => handle_delete(index)}></img>
        </li>
    )
};

export default Item;