/****************************************************************************
  FileName      [ Board.js ]
  PackageName   [ src/components ]
  Author        [ Cheng-Hua Lu, Chin-Yi Cheng ]
  Synopsis      [ This file generates the Board. ]
  Copyright     [ 2021 10 ]
****************************************************************************/

import React, { useEffect, useState } from 'react';
import Cell from './Cell';
import Modal from './Modal';
import Dashboard from './Dashboard';
import createBoard from '../util/createBoard';
import { revealed } from '../util/reveal';
import './css/Board.css'


const Board = ({ boardSize, mineNum, backToHome }) => {
    const [board, setBoard] = useState([]);                     // An 2-dimentional array. It is used to store the board.
    const [nonMineCount, setNonMineCount] = useState(0);        // An integer variable to store the number of cells whose value are not '💣'.
    const [mineLocations, setMineLocations] = useState([]);     // An array to store all the coordinate of '💣'.
    const [gameOver, setGameOver] = useState(false);            // A boolean variable. If true, means you lose the game (Game over).
    const [remainFlagNum, setRemainFlagNum] = useState(0);      // An integer variable to store the number of remain flags.
    const [win, setWin] = useState(false);                      // A boolean variable. If true, means that you win the game.

    useEffect(() => {
        // Calling the function
        freshBoard();
    }, []);

    // Creating a board
    const freshBoard = () => {
        {/* -- TODO 3-1 -- */}
        {/* Useful Hint: createBoard(...) */}
        let tmp;
        tmp = createBoard(boardSize, mineNum)
        setBoard(tmp['board']);
        setMineLocations(tmp['mineLocations']);
        let countremainflagnum = mineNum;
        for (let i = 0; i < mineLocations.length; i++){
            if (board[mineLocations[i][0], mineLocations[i][1]].flagged){
                countremainflagnum -= 1;
            }
        }
        setRemainFlagNum(countremainflagnum);
        console.log('infresh');

    }

    const restartGame = () => {
        {/* -- TODO 5-2 -- */}
        {/* Useful Hint: freshBoard() */}
        
    }

    // On Right Click / Flag Cell
    const updateFlag = (e, x, y) => {
        // To not have a dropdown on right click
        e.preventDefault();
        // let copy1 = board;
        // let copy2 = copy1[x];
        // if (copy2[y].flagged){
        //     setRemainFlagNum(remainFlagNum + 1);
        // }
        // else {
        //     setRemainFlagNum(remainFlagNum - 1);
        // }
        // copy2[y].flagged = !copy2[y].flagged;
        // console.log(copy2[y].flagged);
        // console.log(copy1[x][y])
        // setBoard(copy1);

        let copy = board;
        if (copy[x][y].flagged){
            setRemainFlagNum(remainFlagNum + 1);
        }
        else{
            setRemainFlagNum(remainFlagNum - 1);
        }
        copy[x][y].flagged = !copy[x][y].flagged
        setBoard(copy);

        // Deep copy of a state
        {/* -- TODO 3-2 -- */}
        {/* Useful Hint: A cell is going to be flagged. 'x' and 'y' are the xy-coordinate of the cell. */}
        {/* Reminder: If the cell is already flagged, you should unflagged it. Also remember to update the board and the remainFlagNum. */}
        {/* Reminder: The cell can be flagged only when it is not revealed. */}
        
    };

    const revealCell = (x, y) => {
        
        let newdata = revealed(board, x, y, nonMineCount);
        // console.log(newdata.board);
        setBoard(newdata.board);
        setNonMineCount(newdata.newNonMinesCount);
        {/* -- TODO 4-1 -- */}
        {/* Reveal the cell */}
        {/* Useful Hint: The function in reveal.js may be useful. You should consider if the cell you want to reveal is a location of mines or not. */}
        {/* Reminder: Also remember to handle the condition that after you reveal this cell then you win the game. */}
        
    };
    // Cell({rowIdx, colIdx, detail, updateFlag, revealCell})
    return(
        <div className = 'boardPage' >
            <div className = 'boardWrapper' >
                <h1>This is the board Page!</h1>  {/* This line of code is just for testing. Please delete it if you finish this function. */}
                <div className="boardContainer">
                    <Dashboard remainFlagNum={remainFlagNum} gameOver={gameOver}/>
                {
                    board.map((subboard, x) => {
                        let elements = []
                        subboard.map((element, y) => {
                            elements.push(<Cell rowIdx={y} colIdx={x} detail={element} updateFlag={updateFlag} revealCell={revealCell}/>)
                        })
                        let id = 'row' + x;
                        return (
                            <div id={id} style={{display: 'flex'}}>
                                {elements}
                            </div>
                        )
                    })
                }
                </div>
                {/* -- TODO 3-1 -- */}
                {/* Useful Hint: The board is composed of BOARDSIZE*BOARDSIZE of Cell (2-dimention). So, nested 'map' is needed to implement the board.  */}
                {/* Reminder: Remember to use the component <Cell> and <Dashboard>. See Cell.js and Dashboard.js for detailed information. */}
            
            </div>
        </div>
    ); 

    

}

export default Board