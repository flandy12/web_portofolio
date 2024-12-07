import React, { useState, useEffect, useCallback } from 'react';
const SnakeGame = () => {
  const [snake, setSnake] = useState([[10, 10]]);
  const [food, setFood] = useState([15, 15]);
  const [direction, setDirection] = useState('RIGHT');
  const [speed, setSpeed] = useState(200);
  const [gameOver, setGameOver] = useState(false);

  const boardSize = 20;

  const handleKeyDown = useCallback((e) => {
    switch (e.key) {
      case 'ArrowUp':
        if (direction !== 'DOWN') setDirection('UP');
        break;
      case 'ArrowDown':
        if (direction !== 'UP') setDirection('DOWN');
        break;
      case 'ArrowLeft':
        if (direction !== 'RIGHT') setDirection('LEFT');
        break;
      case 'ArrowRight':
        if (direction !== 'LEFT') setDirection('RIGHT');
        break;
      default:
        break;
    }
  }, [direction]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const moveSnake = useCallback(() => {
    const newSnake = [...snake];
    const head = [...newSnake[newSnake.length - 1]];

    switch (direction) {
      case 'UP':
        head[1] -= 1;
        break;
      case 'DOWN':
        head[1] += 1;
        break;
      case 'LEFT':
        head[0] -= 1;
        break;
      case 'RIGHT':
        head[0] += 1;
        break;
      default:
        break;
    }

    // Check collision with walls
    if (
      head[0] < 0 ||
      head[1] < 0 ||
      head[0] >= boardSize ||
      head[1] >= boardSize ||
      newSnake.some(([x, y]) => x === head[0] && y === head[1])
    ) {
      setGameOver(true);
      return;
    }

    newSnake.push(head);

    // Check if snake eats food
    if (head[0] === food[0] && head[1] === food[1]) {
      setFood([
        Math.floor(Math.random() * boardSize),
        Math.floor(Math.random() * boardSize),
      ]);
    } else {
      newSnake.shift();
    }

    setSnake(newSnake);
  }, [snake, direction, food, boardSize]);

  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(moveSnake, speed);
    return () => clearInterval(interval);
  }, [moveSnake, speed, gameOver]);

  return (
    <div className='bg-default h-screen flex'>
      {gameOver ? (
        <div className="game-over bg-red-500 w-[500px] p-20 m-auto rounded-lg">
          <h1 className='text-xl text-black font-semibold mb-5'>Game Over</h1>
          <button className='text-xl text-red-200 font-semibold bg-red-800 px-10 py-3 rounded-full' onClick={() => window.location.reload()}>Restart</button>
        </div>
      ) : (
        <div className="board h-fit mt-28">
          {Array.from({ length: boardSize }, (_, y) =>
            Array.from({ length: boardSize }, (_, x) => {
              const isSnake = snake.some(([sx, sy]) => sx === x && sy === y);
              const isFood = food[0] === x && food[1] === y;
              return (
                <div
                  key={`${x}-${y}`}
                  className={`cell ${isSnake ? 'snake' : ''} ${
                    isFood ? 'food' : ''
                  }`}
                ></div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};

export default SnakeGame;
