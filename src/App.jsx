import { Gear, PaintBrushBroad } from "phosphor-react";
import { useState } from "react";
import ColorPalette from "./components/ColorPalette";
import SettingsModal from "./components/SettingsModal";
import PixelGrid from "./components/PixelGrid";

function App() {
  const [selectedColor, setSelectedColor] = useState("#000000");

  return (
    <div className="flex flex-col items-center justify-between bg-zinc-900  text-zinc-50">
      <div className="flex h-screen w-full max-w-3xl flex-col items-center justify-between p-4">
        <SettingsModal />
        <div className="flex items-center gap-3 text-5xl">
          <PaintBrushBroad size={48} weight="duotone" /> PixelPaint
        </div>
        <PixelGrid selectedColor={selectedColor} />
        <ColorPalette
          selectedColor={selectedColor}
          changeSelectedColor={setSelectedColor}
        />
      </div>
    </div>
  );
}

export default App;
