let colors = [
  "#71717a",
  "#ef4444",
  "#f59e0b",
  "#eab308",
  "#84cc16",
  "#10b981",
  "#0ea5e9",
  "#3b82f6",
  "#8b5cf6",
  "#d946ef",
  "#ec4899",
  "#000000",
];

export default function ColorPalette({ selectedColor, changeSelectedColor }) {
  return (
    <div className="flex flex-col gap-3 rounded-sm py-6 shadow-md">
      <div className="flex w-full items-center justify-between text-lg">
        Choose color:
        <label className="flex items-center justify-between" htmlFor="color">
          <div
            className="h-8 w-10 rounded-sm border border-zinc-600"
            style={{ backgroundColor: selectedColor }}
          />
          <input
            onChange={(e) => {
              changeSelectedColor(e.target.value);
            }}
            value={selectedColor}
            type="color"
            id="color"
            className="hidden"
          />
        </label>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {colors.map((color, i) => (
          <button
            key={i}
            onClick={() => {
              changeSelectedColor(color);
            }}
            style={{ backgroundColor: color }}
            className="h-10 w-16 rounded-sm border border-zinc-600"
          />
        ))}
      </div>
    </div>
  );
}
