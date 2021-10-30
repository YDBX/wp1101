import img_x from '../img/x.png'
import { useState } from 'react';
import { update, remove_footer } from './footer.js';

let change_type;
let remove_completed_item;

const Item = (props) => {
    const todo = props.todo;
    const complete = props.complete;
    const handleclick = props.handleclick;
    const remove = props.remove;
    const index = props.index;
    let default_style;
    let default_checked;
    if (complete) {
        default_style = {textDecoration: 'line-through', 'opacity': '0.5'};
        default_checked = true;
    }
    else {
        default_style = {textDecoration: 'none'};
        default_checked = false;
    }
    const [style, setStyle] = useState(default_style);
    const [render, setRender] = useState(true);
    const [checked, setChecked] = useState(default_checked);

    const handle_checkbox = (index) => {
        handleclick(index);
        update(index);
        if (style['textDecoration'] === 'none'){
            setStyle({textDecoration: 'line-through', 'opacity': '0.5'});
            setChecked(true);
        }
        else {
            setStyle({textDecoration: 'none'});
            setChecked(false);
        }
    }

    const handle_delete = (index) => {
        remove(index);
        setRender(false);
    }

    remove_completed_item = () => {
        // setComplete(false);
        // setStyle({textDecoration: 'none'});
    }

    if (render)
        return (
            <li className="todo-app__item" key={todo}>
                <div className="todo-app__checkbox">
                    <input id={index} type="checkbox" onClick={() => handle_checkbox(index)} checked={checked}></input>
                    <label for={index}></label>
                </div>
                <h1 className="todo-app__item-detail" style={style}>
                    {todo}
                </h1>
                <img src={img_x} className="todo-app__item-x" onClick={() => handle_delete(index)} alt="x"></img>
            </li>
        );
    else
        return null;
};

export default Item;
export {change_type, remove_completed_item};