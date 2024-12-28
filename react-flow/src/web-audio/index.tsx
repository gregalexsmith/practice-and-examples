import { Background, ReactFlow, ReactFlowProvider } from "@xyflow/react";
import { shallow } from "zustand/shallow";
import { State, useStore } from "./store";
import Osc from "./nodes/Osc";
import Gain from "./nodes/Gain";

const selector = (store: State) => ({
  nodes: store.nodes,
  edges: store.edges,
  onNodesChange: store.onNodesChange,
  onEdgesChange: store.onEdgesChange,
  addEdge: store.addEdge,
});

const nodeTypes = {
  osc: Osc,
  gain: Gain,
};

export const WebAudioExample = () => {
  const store = useStore(selector, shallow);
  return (
    <ReactFlowProvider>
      <ReactFlow
        nodes={store.nodes}
        nodeTypes={nodeTypes}
        edges={store.edges}
        onNodesChange={store.onNodesChange}
        onEdgesChange={store.onEdgesChange}
        onConnect={store.addEdge}
      >
        <Background />
      </ReactFlow>
    </ReactFlowProvider>
  );
};
