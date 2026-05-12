import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

// 💡 컴포넌트 밖으로 빼는 게 더 깔끔! (Board 안에 있을 필요 없음)
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],  // 가로 3줄
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  // 세로 3줄
    [0, 4, 8], [2, 4, 6]              // 대각선 2줄
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    // ⭐ 추가: 승자가 이미 결정됐거나, 이미 채워진 칸이면 무시
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';  // 삼항연산자로 간결하게!
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  // ⭐ 추가: 매 렌더링마다 승자 체크해서 상태 메시지 만들기
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = '🏆 승리 : ' + winner;
  } else {
    status = '다음 차례: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      {/* ⭐ 추가: 상태 메시지 표시 */}
      <div className="status">{status}</div>

      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}