import { Background, Panel, ReactFlow, ReactFlowProvider } from "@xyflow/react";
import { shallow } from "zustand/shallow";
import { State, useStore } from "./store";
import Osc from "./nodes/Osc";
import Gain from "./nodes/Gain";
import Out from "./nodes/Out";

const selector = (store: State) => ({
  nodes: store.nodes,
  edges: store.edges,
  onNodesChange: store.onNodesChange,
  onNodesDelete: store.removeNodes,
  onEdgesChange: store.onEdgesChange,
  addEdge: store.addEdge,
  onEdgesDelete: store.onEdgesDelete,
  createNode: store.createNode,
});

const nodeTypes = {
  osc: Osc,
  gain: Gain,
  out: Out,
};

export const WebAudioExample = () => {
  const store = useStore(selector, shallow);
  return (
    <ReactFlowProvider>
      <Panel position="top-right">
        <button onClick={() => store.createNode("osc")}>Osc</button>
        <button onClick={() => store.createNode("amp")}>Amp</button>
      </Panel>
      <ReactFlow
        nodes={store.nodes}
        nodeTypes={nodeTypes}
        edges={store.edges}
        onNodesChange={store.onNodesChange}
        onEdgesChange={store.onEdgesChange}
        onConnect={store.addEdge}
        onNodesDelete={store.onNodesDelete}
        onEdgesDelete={store.onEdgesDelete}
      >
        <Background />
      </ReactFlow>
    </ReactFlowProvider>
  );
};
