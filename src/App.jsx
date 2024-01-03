import { useState } from "react";

function App() {
  const [color, setColor] = useState("grey");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ background: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-{setColor} rounded-3xl px-3 py-2">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 text-white rounded-full shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>

            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 text-white rounded-full shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>

            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 py-1 text-black rounded-full shadow-lg font-bold"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>

            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 text-white rounded-full shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>

            <button
              onClick={() => setColor("Pink")}
              className="outline-none px-4 py-1 text-black rounded-full shadow-lg font-bold"
              style={{ backgroundColor: "Pink" }}
            >
              Pink
            </button>

            <button
              onClick={() => setColor("White")}
              className="outline-none px-4 py-1 text-black rounded-full shadow-lg font-bold"
              style={{ backgroundColor: "White" }}
            >
              White
            </button>

            <button
              onClick={() => setColor("Black")}
              className="outline-none px-4 py-1 text-white rounded-full shadow-lg"
              style={{ backgroundColor: "Black" }}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
