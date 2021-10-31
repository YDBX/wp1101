import img_x from '../img/x.png'
import { useEffect, useState } from 'react';
import { update } from './footer.js';

const Item = (props) => {
    const todo = props.todo;
    const complete = props.complete;
    const handleclick = props.handleclick;
    const remove = props.remove;
    const index = props.index;
    const [style, setStyle] = useState(props.style);
    const [checked, setChecked] = useState(props.checked);
    const [render, setRender] = useState(true);

    const handle_checkbox = (todo) => {
        handleclick(todo);
        update(todo);
        if (style['textDecoration'] === 'none'){
            setStyle({textDecoration: 'line-through', 'opacity': '0.5'});
            setChecked(true);
        }
        else {
            setStyle({textDecoration: 'none'});
            setChecked(false);
        }
    }

    const remove_item = (todo) => {
        remove(todo);
        setRender(false);
        update();
    }

    useEffect(() => {
        setStyle(props.style);
        setChecked(props.checked);
        setRender(true);
    }, [props])

    if (render) {
        return (
            <li className="todo-app__item" key={todo}>
                <div className="todo-app__checkbox">
                    <input id={index} type="checkbox" onClick={() => handle_checkbox(todo)} checked={checked}></input>
                    <label for={index}></label>
                </div>
                <h1 className="todo-app__item-detail" style={style}>
                    {todo}
                </h1>
                <img src={img_x} className="todo-app__item-x" onClick={() => remove_item(todo)} alt="x"></img>
            </li>
        );
    }
    else {
        return null;
    }
    
};

export default Item;