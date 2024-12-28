import { Handle, Position } from "@xyflow/react";
import { shallow } from "zustand/shallow";
import { State, useStore } from "../store";

const selector = (store: State) => ({
  isRunning: store.isRunning,
  toggleAudio: store.toggleAudio,
});

export default function Out() {
  const { isRunning, toggleAudio } = useStore(selector, shallow);

  return (
    <div className="rounded-md bg-white shadow-xl px-4 py-2">
      <Handle className="w-2 h-2" type="target" position={Position.Top} />

      <button onClick={toggleAudio}>
        {isRunning ? (
          <span role="img" aria-label="mute">
            🔈
          </span>
        ) : (
          <span role="img" aria-label="unmute">
            🔇
          </span>
        )}
      </button>
    </div>
  );
}
