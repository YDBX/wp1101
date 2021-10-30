import Item from './item.js';

const List = (props) => {
    // console.log('inlist');
    const todos = props.todos;
    const complete = props.complete;
    const handleclick = props.handleclick;
    const remove_todo = props.remove_todo;

    const listItems = todos.map((todo) => {
        let index = todos.findIndex((element) => element === todo);
        return (
            <Item todo={todo} complete={complete} handleclick={handleclick} index={index} remove_todo={remove_todo}/>
        )
    });


    
    return (
        <ul className="todo-app__list" id="todo-list">
            {listItems}
        </ul>
    )
};

export default List;