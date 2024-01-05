import React, { ReactNode } from "react";
import internal from "node:stream";

interface List1Props {

}

const ListStyle1: React.FC<List1Props> = () => {
  return (
      <div className='GameStyle1'>
          <h1 className='border-b-2 font-extrabold text-red-600'>Game Được Đề Xuất</h1>
        <div className='list-game-area flex'>
            <div className='h-64 w-64 bg-amber-500'>Game1</div>
            <div>Game2</div>
            <div>Game3</div>
            <div>Game4</div>
        </div>
      </div>
  );
};

export default ListStyle1;
