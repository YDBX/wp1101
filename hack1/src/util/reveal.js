/****************************************************************************
  FileName      [ reveal.js ]
  PackageName   [ src/util ]
  Author        [ Cheng-Hua Lu, Chin-Yi Cheng ]
  Synopsis      [ This file states the reaction when left clicking a cell. ]
  Copyright     [ 2021 10 ]
****************************************************************************/

export const revealed = (board, x, y, newNonMinesCount) => {
    {/* -- TODO 4-2 -- */}
    {/* Useful Hint: If the cell is already revealed, do nothing. */}
    {/* Useful Hint: If the value of the cell is not 0, only show the cell value. */}
    let boardSize = board.length;
    if (x === 0 && y === 0){
        if (!board[x][y + 1].flagged && !board[x][y + 1].revealed){
          board[x][y + 1].revealed = true;
          newNonMinesCount += 1
          if (board[x][y + 1].value === 0){
            let newdata = revealed(board, x, y + 1, newNonMinesCount);
            board = newdata.board;
            newNonMinesCount = newdata.newNonMinesCount;
          }
        }
        if (!board[x + 1][y + 1].flagged && !board[x + 1][y + 1].revealed){
          board[x + 1][y + 1].revealed = true;
          newNonMinesCount += 1
          if (board[x + 1][y + 1].value === 0){
            let newdata = revealed(board, x + 1, y + 1, newNonMinesCount);
            board = newdata.board;
            newNonMinesCount = newdata.newNonMinesCount;
          }
        }
            
        if (!board[x + 1][y].flagged && !board[x + 1][y].revealed){
            board[x + 1][y].revealed = true;
            newNonMinesCount += 1
            if (board[x + 1][y].value === 0){
              let newdata = revealed(board, x + 1, y, newNonMinesCount);
              board = newdata.board;
              newNonMinesCount = newdata.newNonMinesCount;
            }
        }
    }
    else if (x === 0 && y === (boardSize - 1)){
        if (!board[x + 1][y].flagged && !board[x + 1][y].revealed){
            board[x + 1][y].revealed = true;
            newNonMinesCount += 1
            if (board[x + 1][y].value === 0){
              let newdata = revealed(board, x + 1, y, newNonMinesCount);
              board = newdata.board;
              newNonMinesCount = newdata.newNonMinesCount;
            }
        }
        if (!board[x + 1][y - 1].flagged && !board[x + 1][y - 1].revealed){
            board[x + 1][y - 1].revealed = true;
            newNonMinesCount += 1
            if (board[x + 1][y - 1].value === 0){
              let newdata = revealed(board, x + 1, y - 1, newNonMinesCount);
              board = newdata.board;
              newNonMinesCount = newdata.newNonMinesCount;
            }
        }
        if (!board[x][y - 1].flagged && !board[x][y - 1].revealed){
            board[x][y - 1].revealed = true;
            newNonMinesCount += 1;
            if (board[x][y - 1].value === 0){
              let newdata = revealed(board, x, y - 1, newNonMinesCount);
              board = newdata.board;
              newNonMinesCount = newdata.newNonMinesCount;
            }
        }
    }
    else if (x === (boardSize - 1) && y === 0){
        if (!board[x - 1][y].flagged && !board[x - 1][y].revealed){
            board[x - 1][y].revealed = true;
            newNonMinesCount += 1;
            if (board[x - 1][y].value === 0){
              let newdata = revealed(board, x - 1, y, newNonMinesCount);
              board = newdata.board;
              newNonMinesCount = newdata.newNonMinesCount;
            }
        }
        if (!board[x - 1][y + 1].flagged && !board[x - 1][y + 1].revealed){
            board[x - 1][y + 1].revealed = true;
            newNonMinesCount += 1;
            if (board[x - 1][y + 1].value === 0){
              let newdata = revealed(board, x - 1, y + 1, newNonMinesCount);
              board = newdata.board;
              newNonMinesCount = newdata.newNonMinesCount;
            }
        }
        if (!board[x][y + 1].flagged && !board[x][y + 1].revealed){
            board[x][y + 1].revealed = true;
            newNonMinesCount += 1;
            if (board[x][y + 1].value === 0){
              let newdata = revealed(board, x, y + 1, newNonMinesCount);
              board = newdata.board;
              newNonMinesCount = newdata.newNonMinesCount;
            }
        }
    }
    else if (x === (boardSize - 1) && y === (boardSize - 1)){
        if (!board[x][y - 1].flagged && !board[x][y - 1].revealed){
            board[x][y - 1].revealed = true;
            newNonMinesCount += 1;
            if (board[x][y - 1].value === 0){
              let newdata = revealed(board, x, y - 1, newNonMinesCount);
              board = newdata.board;
              newNonMinesCount = newdata.newNonMinesCount;
            }
        }
        if (!board[x - 1][y - 1].flagged && !board[x - 1][y - 1].revealed){
            board[x - 1][y - 1].revealed = true;
            newNonMinesCount += 1;
            if (board[x - 1][y - 1].value === 0){
              let newdata = revealed(board, x - 1, y - 1, newNonMinesCount);
              board = newdata.board;
              newNonMinesCount = newdata.newNonMinesCount;
            }
        }
        if (!board[x - 1][y].flagged && !board[x - 1][y].revealed){
            board[x - 1][y].revealed = true;
            newNonMinesCount += 1;
            if (board[x - 1][y].value === 0){
              let newdata = revealed(board, x - 1, y, newNonMinesCount);
              board = newdata.board;
              newNonMinesCount = newdata.newNonMinesCount;
            }
        }
    }
    else if (x === 0){
        if (!board[x][y - 1].flagged && !board[x][y - 1].revealed){
            board[x][y - 1].revealed = true;
            newNonMinesCount += 1;
            if (board[x][y - 1].value === 0){
              let newdata = revealed(board, x, y - 1, newNonMinesCount);
              board = newdata.board;
              newNonMinesCount = newdata.newNonMinesCount;
            }
        }
        if (!board[x + 1][y - 1].flagged && !board[x + 1][y - 1].revealed){
            board[x + 1][y - 1].revealed = true;
            newNonMinesCount += 1;
            if (board[x + 1][y - 1].value === 0){
              let newdata = revealed(board, x + 1, y - 1, newNonMinesCount);
              board = newdata.board;
              newNonMinesCount = newdata.newNonMinesCount;
            }
        }
        if (!board[x + 1][y].flagged && !board[x + 1][y].revealed){
            board[x + 1][y].revealed = true;
            newNonMinesCount += 1;
            if (board[x + 1][y].value === 0){
              let newdata = revealed(board, x + 1, y, newNonMinesCount);
              board = newdata.board;
              newNonMinesCount = newdata.newNonMinesCount;
            }
        }
        if (!board[x + 1][y + 1].flagged && !board[x + 1][y + 1].revealed){
            board[x + 1][y + 1].revealed = true;
            newNonMinesCount += 1
            if (board[x + 1][y + 1].value === 0){
              let newdata = revealed(board, x + 1, y + 1, newNonMinesCount);
              board = newdata.board;
              newNonMinesCount = newdata.newNonMinesCount;
            }
        }
        if (!board[x][y + 1].flagged && !board[x][y + 1].revealed){
            board[x][y + 1].revealed = true;
            newNonMinesCount += 1;
            if (board[x][y + 1].value === 0){
              let newdata = revealed(board, x, y + 1, newNonMinesCount);
              board = newdata.board;
              newNonMinesCount = newdata.newNonMinesCount;
            }
        }
    }
    else if (x === (boardSize - 1)){
        if (!board[x][y - 1].flagged && !board[x][y - 1].revealed){
            board[x][y - 1].revealed = true;
            newNonMinesCount += 1;
            if (board[x][y - 1].value === 0){
              let newdata = revealed(board, x, y - 1, newNonMinesCount);
              board = newdata.board;
              newNonMinesCount = newdata.newNonMinesCount;
            }
        }
        if (!board[x - 1][y - 1].flagged && !board[x - 1][y - 1].revealed){
            board[x - 1][y - 1].revealed = true;
            newNonMinesCount += 1;
            if (board[x - 1][y - 1].value === 0){
              let newdata = revealed(board, x - 1, y - 1, newNonMinesCount);
              board = newdata.board;
              newNonMinesCount = newdata.newNonMinesCount;
            }
        }
        if (!board[x - 1][y].flagged && !board[x - 1][y].revealed){
            board[x - 1][y].revealed = true;
            newNonMinesCount += 1;
            if (board[x - 1][y].value === 0){
              let newdata = revealed(board, x - 1, y, newNonMinesCount);
              board = newdata.board;
              newNonMinesCount = newdata.newNonMinesCount;
            }
        }
        if (!board[x - 1][y + 1].flagged && !board[x - 1][y + 1].revealed){
            board[x - 1][y + 1].revealed = true;
            newNonMinesCount += 1;
            if (board[x - 1][y + 1].value === 0){
              let newdata = revealed(board, x - 1, y + 1, newNonMinesCount);
              board = newdata.board;
              newNonMinesCount = newdata.newNonMinesCount;
            }
        }
        if (!board[x][y + 1].flagged && !board[x][y + 1].revealed){
            board[x][y + 1].revealed = true;
            newNonMinesCount += 1;
            if (board[x][y + 1].value === 0){
              let newdata = revealed(board, x, y + 1, newNonMinesCount);
              board = newdata.board;
              newNonMinesCount = newdata.newNonMinesCount;
            }
        }
    }
    else if (y === 0){
        if (!board[x - 1][y].flagged && !board[x - 1][y].revealed){
            board[x - 1][y].revealed = true;
            newNonMinesCount += 1;
            if (board[x - 1][y].value === 0){
              let newdata = revealed(board, x - 1, y, newNonMinesCount);
              board = newdata.board;
              newNonMinesCount = newdata.newNonMinesCount;
            }
        }
        if (!board[x - 1][y + 1].flagged && !board[x - 1][y + 1].revealed){
            board[x - 1][y + 1].revealed = true;
            newNonMinesCount += 1;
            if (board[x - 1][y + 1].value === 0){
              let newdata = revealed(board, x - 1, y + 1, newNonMinesCount);
              board = newdata.board;
              newNonMinesCount = newdata.newNonMinesCount;
            }
        }
        if (!board[x][y + 1].flagged && !board[x][y + 1].revealed){
            board[x][y + 1].revealed = true;
            newNonMinesCount += 1;
            if (board[x][y + 1].value === 0){
              let newdata = revealed(board, x, y + 1, newNonMinesCount);
              board = newdata.board;
              newNonMinesCount = newdata.newNonMinesCount;
            }
        }
        if (!board[x + 1][y + 1].flagged && !board[x + 1][y + 1].revealed){
            board[x + 1][y + 1].revealed = true;
            newNonMinesCount += 1;
            if (board[x + 1][y + 1].value === 0){
              let newdata = revealed(board, x + 1, y + 1, newNonMinesCount);
              board = newdata.board;
              newNonMinesCount = newdata.newNonMinesCount;
            }
        }
        if (!board[x + 1][y].flagged && !board[x + 1][y].revealed){
            board[x + 1][y].revealed = true;
            newNonMinesCount += 1;
            if (board[x + 1][y].value === 0){
              let newdata = revealed(board, x + 1, y, newNonMinesCount);
              board = newdata.board;
              newNonMinesCount = newdata.newNonMinesCount;
            }
        }
    }
    else if (y === (boardSize - 1)){
        if (!board[x - 1][y].flagged && !board[x - 1][y].revealed){
            board[x - 1][y].revealed = true;
            newNonMinesCount += 1;
            if (board[x - 1][y].value === 0){
              let newdata = revealed(board, x - 1, y, newNonMinesCount);
              board = newdata.board;
              newNonMinesCount = newdata.newNonMinesCount;
            }
        }
        if (!board[x - 1][y - 1].flagged && !board[x - 1][y - 1].revealed){
            board[x - 1][y - 1].revealed = true;
            newNonMinesCount += 1;
            if (board[x - 1][y - 1].value === 0){
              let newdata = revealed(board, x - 1, y - 1, newNonMinesCount);
              board = newdata.board;
              newNonMinesCount = newdata.newNonMinesCount;
            }
        }
        if (!board[x][y - 1].flagged && !board[x][y - 1].revealed){
            board[x][y - 1].revealed = true;
            newNonMinesCount += 1;
            if (board[x][y - 1].value === 0){
              let newdata = revealed(board, x, y - 1, newNonMinesCount);
              board = newdata.board;
              newNonMinesCount = newdata.newNonMinesCount;
            }
        }
        if (!board[x + 1][y - 1].flagged && !board[x + 1][y - 1].revealed){
            board[x + 1][y - 1].revealed = true;
            newNonMinesCount += 1;
            if (board[x + 1][y - 1].value === 0){
              let newdata = revealed(board, x + 1, y - 1, newNonMinesCount);
              board = newdata.board;
              newNonMinesCount = newdata.newNonMinesCount;
            }
        }
        if (!board[x + 1][y].flagged && !board[x + 1][y].revealed){
            board[x + 1][y].revealed = true;
            newNonMinesCount += 1
            if (board[x + 1][y].value === 0){
              let newdata = revealed(board, x + 1, y, newNonMinesCount);
              board = newdata.board;
              newNonMinesCount = newdata.newNonMinesCount;
            }
        }
    }
    else {
        if (!board[x - 1][y - 1].flagged && !board[x - 1][y - 1].revealed){
            board[x - 1][y - 1].revealed = true;
            newNonMinesCount += 1;
            if (board[x - 1][y - 1].value === 0){
              let newdata = revealed(board, x - 1, y - 1, newNonMinesCount);
              board = newdata.board;
              newNonMinesCount = newdata.newNonMinesCount;
            }
        }
        if (!board[x - 1][y].flagged && !board[x - 1][y].revealed){
            board[x - 1][y].revealed = true;
            newNonMinesCount += 1;
            if (board[x - 1][y].value === 0){
              let newdata = revealed(board, x - 1, y, newNonMinesCount);
              board = newdata.board;
              newNonMinesCount = newdata.newNonMinesCount;
            }
        }
        if (!board[x - 1][y + 1].flagged && !board[x - 1][y + 1].revealed){
            board[x - 1][y + 1].revealed = true;
            newNonMinesCount += 1;
            if (board[x - 1][y + 1].value === 0){
              let newdata = revealed(board, x - 1, y + 1, newNonMinesCount);
              board = newdata.board;
              newNonMinesCount = newdata.newNonMinesCount;
            }
        }
        if (!board[x][y - 1].flagged && !board[x][y - 1].revealed){
            board[x][y - 1].revealed = true;
            newNonMinesCount += 1;
            if (board[x][y - 1].value === 0){
              let newdata = revealed(board, x, y - 1, newNonMinesCount);
              board = newdata.board;
              newNonMinesCount = newdata.newNonMinesCount;
            }
        }
        if (!board[x][y + 1].flagged && !board[x][y + 1].revealed){
            board[x][y + 1].revealed = true;
            newNonMinesCount += 1;
            if (board[x][y + 1].value === 0){
              let newdata = revealed(board, x, y + 1, newNonMinesCount);
              board = newdata.board;
              newNonMinesCount = newdata.newNonMinesCount;
            }
        }
        if (!board[x - 1][y - 1].flagged && !board[x - 1][y - 1].revealed){
            board[x - 1][y - 1].revealed = true;
            newNonMinesCount += 1;
            if (board[x - 1][y - 1].value === 0){
              let newdata = revealed(board, x - 1, y - 1, newNonMinesCount);
              board = newdata.board;
              newNonMinesCount = newdata.newNonMinesCount;
            }
        }
        if (!board[x - 1][y].flagged && !board[x - 1][y].revealed){
            board[x - 1][y].revealed = true;
            newNonMinesCount += 1;
            if (board[x - 1][y].value === 0){
              let newdata = revealed(board, x - 1, y, newNonMinesCount);
              board = newdata.board;
              newNonMinesCount = newdata.newNonMinesCount;
            }
        }
        if (!board[x - 1][y + 1].flagged && !board[x - 1][y + 1].revealed){
            board[x - 1][y + 1].revealed = true;
            newNonMinesCount += 1;
            if (board[x - 1][y + 1].value === 0){
              let newdata = revealed(board, x - 1, y + 1, newNonMinesCount);
              board = newdata.board;
              newNonMinesCount = newdata.newNonMinesCount;
            }
        }
    }
    if (!board[x][y].flagged && !board[x][y].revealed){
        board[x][y].revealed = true;
        newNonMinesCount += 1
        if (board[x][y].value === 0){
          let newdata = revealed(board, x, y, newNonMinesCount);
          board = newdata.board;
          newNonMinesCount = newdata.newNonMinesCount;
        }
    }

    {/* -- TODO 4-2 -- */}
    {/* Useful Hint: If the value of the cell is 0, we should try to find the value of adjacent cells until the value we found is not 0. */}
    {/* Useful Hint: The input variables 'newNonMinesCount' and 'board' may be changed in this function. */}
    
    
    return {board, newNonMinesCount};
};
