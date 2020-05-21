import React from 'react';
import Chessboard from 'chessboardjsx';

const ChessGame = ({ position }) => {
  if (typeof window === `undefined`) {
    return <p>No window present</p>;
  }
  return (
    <div className="video-responsive">
      <Chessboard position={position ? position : 'start'} />
    </div>
  );
};

export default ChessGame;
