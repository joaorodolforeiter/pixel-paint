import { useState } from "react";
import { baseArray } from "../array";

export default function PixelGrid({ selectedColor }) {
  let savedArray = baseArray;
  return (
    <div className="grid-cols-16 grid rounded-sm bg-zinc-800 p-2 shadow-md">
      {savedArray.map((color, i) => {
        return <Pixel selectedColor={selectedColor} key={i} />;
      })}
    </div>
  );
}

function Pixel({ selectedColor }) {
  const [color, setColor] = useState("#ffffff");
  return (
    <button
      onClick={() =>
        selectedColor === color ? setColor("#ffffff") : setColor(selectedColor)
      }
      className="aspect-square h-4 rounded-sm"
      style={{ backgroundColor: color }}
    />
  );
}
