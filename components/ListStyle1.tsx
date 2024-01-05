import React, { ReactNode } from "react";
import internal from "node:stream";

interface List1Props {
  title: string;
  numberPage: number;
}

const List1: React.FC<List1Props> = ({ title, numberPage }: List1Props) => {
  return (
    <>
      <h6>{title}</h6>
      <span>List1 component</span>
    </>
  );
};

export default List1;
