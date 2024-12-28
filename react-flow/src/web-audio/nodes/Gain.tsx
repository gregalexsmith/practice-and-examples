import { Handle, Position } from "@xyflow/react";
import { State, useStore } from "../store";
import { shallow } from "zustand/shallow";

interface GainData {
  gain: number;
}

const selector = (id: string) => (store: State) => ({
  setGain: (e: React.ChangeEvent<HTMLInputElement>) =>
    store.updateNode(id, { gain: +e.target.value }),
});

export default function Gain({ id, data }: { id: string; data: GainData }) {
  const { setGain } = useStore(selector(id), shallow);

  return (
    <div className="bg-surface-raised shadow-xl rounded-md">
      <Handle className="w-2 h-2" type="target" position={Position.Top} />

      <p className="px-2 py-1 bg-blue-500 text-white text-sm rounded-t-md">
        Gain
      </p>

      <label className="flex flex-col px-2 py-1">
        <p className="text-xs font-bold mb-2">Gain</p>
        <input
          className="nodrag"
          type="range"
          min="0"
          max="1"
          value={data.gain}
          onChange={setGain}
        />
        <p className="text-right text-xs">{data.gain}</p>
      </label>

      <Handle className="w-2 h-2" type="source" position={Position.Bottom} />
    </div>
  );
}
