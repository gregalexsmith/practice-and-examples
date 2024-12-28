import { Handle, Position } from "@xyflow/react";
import { State, useStore } from "../store";
import { shallow } from "zustand/shallow";

interface OscData {
  frequency: number;
  type: "sine" | "triangle" | "sawtooth" | "square";
}

const selector = (id: string) => (store: State) => ({
  setFrequency: (e: React.ChangeEvent<HTMLInputElement>) =>
    store.updateNode(id, { frequency: +e.target.value }),
  setType: (e: React.ChangeEvent<HTMLSelectElement>) =>
    store.updateNode(id, { type: e.target.value }),
});

export default function Osc({ id, data }: { id: string; data: OscData }) {
  const { setFrequency, setType } = useStore(selector(id), shallow);

  return (
    <div className="bg-surface-raised shadow-xl rounded-md">
      <p className="px-2 py-1 bg-pink-500 text-white text-sm rounded-t-md">
        Osc
      </p>

      <label className="flex flex-col px-2 py-1">
        <p className="text-xs font-bold mb-2">Frequency</p>
        <input
          className="nodrag"
          type="range"
          min="10"
          max="1000"
          value={data.frequency}
          onChange={setFrequency}
        />
        <p className="text-right text-xs">{data.frequency} Hz</p>
      </label>

      <hr className="border-gray-200 mx-2" />

      <label className="flex flex-col px-2 pt-1 pb-4">
        <p className="text-xs font-bold mb-2">Waveform</p>
        <select className="nodrag" value={data.type} onChange={setType}>
          <option value="sine">sine</option>
          <option value="triangle">triangle</option>
          <option value="sawtooth">sawtooth</option>
          <option value="square">square</option>
        </select>
      </label>

      <Handle className="w-2 h-2" type="source" position={Position.Bottom} />
    </div>
  );
}
