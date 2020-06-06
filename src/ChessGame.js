import React from 'react';
import loadable from '@loadable/component';

const Chessboard = loadable(() => import('chessboardjsx'));

const ChessGame = ({ position }) => {
  return (
    <>
      <Chessboard position={position ? position : 'start'} />
    </>
  );
};

export default ChessGame;
