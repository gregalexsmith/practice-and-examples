import { Background, ReactFlow, ReactFlowProvider } from "@xyflow/react";

export const WebAudioExample = () => {
  return (
    <ReactFlowProvider>
      <ReactFlow>
        <Background />
      </ReactFlow>
    </ReactFlowProvider>
  );
};
