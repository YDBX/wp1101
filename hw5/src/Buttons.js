const Buttons = (props) => {

    const handleClick = props.handleClick;
    const buttons = [
        ['C', '(', ')', '÷'],
        ['7', '8', '9', 'x'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['^', '0', '.', '=']
    ];

    return (
        <div className="buttons">
            {
                
                buttons.map((button_row) => {
                    return (
                        <div className="button-row">
                            {
                                button_row.map((value) => {
                                    return(
                                        <div className='button-container' id={value}>
                                            <button class='button' onClick={() => handleClick(value)}>{value}</button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Buttons;