import { Background, ReactFlow, ReactFlowProvider } from "@xyflow/react";
import { shallow } from "zustand/shallow";
import { State, useStore } from "./store";

const selector = (store: State) => ({
  nodes: store.nodes,
  edges: store.edges,
  onNodesChange: store.onNodesChange,
  onEdgesChange: store.onEdgesChange,
  addEdge: store.addEdge,
});

export const WebAudioExample = () => {
  const store = useStore(selector, shallow);
  return (
    <ReactFlowProvider>
      <ReactFlow
        nodes={store.nodes}
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
