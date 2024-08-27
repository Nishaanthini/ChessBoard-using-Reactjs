import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { GiChessRook } from "react-icons/gi";
import { FaChessKnight } from "react-icons/fa";
import { FaChessBishop } from "react-icons/fa";
import { FaChessKing } from "react-icons/fa6";
import { FaChessQueen } from "react-icons/fa";
import { FaChessPawn } from "react-icons/fa";

function Board(){
  const [pawnPosition, setPawnPosition] = useState({ row: 6, col: 3 });
  const moveForward = () => {
    if (pawnPosition.row === 6 && pawnPosition.col === 3) {
      setPawnPosition({ row: 5, col: 3 });
    }
  };
  return(
    <div>
      <div className='board'>
        <div className='row'>
          <div className='col white'><GiChessRook className='icon'/></div>
          <div className='col black'><FaChessKnight className='icon' /></div>
          <div className='col white'><FaChessBishop className='icon'/></div>
          <div className='col black'><FaChessKing className='icon'/></div>
          <div className='col white'><FaChessQueen className='icon'/></div>
          <div className='col black'><FaChessBishop className='icon'/></div>
          <div className='col white'><FaChessKnight className='icon' /></div>
          <div className='col black'><GiChessRook className='icon'/></div>
        </div>

        <div className='row'>
          <div className='col black'><FaChessPawn className='icon'/></div>
          <div className='col white'><FaChessPawn className='icon'/></div>
          <div className='col black'><FaChessPawn className='icon'/></div>
          <div className='col white'><FaChessPawn className='icon'/></div>
          <div className='col black'><FaChessPawn className='icon'/></div>
          <div className='col white'><FaChessPawn className='icon'/></div>
          <div className='col black'><FaChessPawn className='icon'/></div>
          <div className='col white'><FaChessPawn className='icon'/></div>
        </div>

        <div className='row'>
          <div className='col white'></div>
          <div className='col black'></div>
          <div className='col white'></div>
          <div className='col black'></div>
          <div className='col white'></div>
          <div className='col black'></div>
          <div className='col white'></div>
          <div className='col black'></div>
        </div>

        <div className='row'>
          <div className='col black'></div>
          <div className='col white'></div>
          <div className='col black'></div>
          <div className='col white'></div>
          <div className='col black'></div>
          <div className='col white'></div>
          <div className='col black'></div>
          <div className='col white'></div>
        </div>

        <div className='row'>
          <div className='col white'></div>
          <div className='col black'></div>
          <div className='col white'></div>
          <div className='col black'></div>
          <div className='col white'></div>
          <div className='col black'></div>
          <div className='col white'></div>
          <div className='col black'></div>
        </div>

        <div className='row'>
          <div className='col black'></div>
          <div className='col white'></div>
          <div className='col black'>{pawnPosition.row === 5 && pawnPosition.col === 3 && <FaChessPawn className='icon1' />}</div>
          <div className='col white'></div>
          <div className='col black'></div>
          <div className='col white'></div>
          <div className='col black'></div>
          <div className='col white'></div>
        </div>

        <div className='row'>
          <div className='col white'><FaChessPawn className='icon1'/></div>
          <div className='col black'><FaChessPawn className='icon1'/></div>
          <div className='col white' onClick={moveForward}>{pawnPosition.row === 6 && pawnPosition.col === 3 && <FaChessPawn className='icon1' />}</div>
          <div className='col black'><FaChessPawn className='icon1'/></div>
          <div className='col white'><FaChessPawn className='icon1'/></div>
          <div className='col black'><FaChessPawn className='icon1'/></div>
          <div className='col white'><FaChessPawn className='icon1'/></div>
          <div className='col black'><FaChessPawn className='icon1'/></div>
        </div>

        <div className='row'>
          <div className='col black'><GiChessRook className='icon1'/></div>
          <div className='col white'><FaChessKnight className='icon1' /></div>
          <div className='col black'><FaChessBishop className='icon1'/></div>
          <div className='col white'><FaChessKing className='icon1'/></div>
          <div className='col black'><FaChessQueen className='icon1'/></div>
          <div className='col white'><FaChessBishop className='icon1'/></div>
          <div className='col black'><FaChessKnight className='icon1' /></div>
          <div className='col white'><GiChessRook className='icon1'/></div>
        </div>

      </div>
    </div>
  )
}

ReactDOM.render(<Board/>,document.getElementById('root'));
