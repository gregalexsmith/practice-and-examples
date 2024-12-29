import { useCallback, useRef } from "react";
import {
  ReactFlow,
  Controls,
  Panel,
  useStoreApi,
  useReactFlow,
  ConnectionLineType,
  type NodeOrigin,
  type InternalNode,
  type OnConnectEnd,
  type OnConnectStart,
  ReactFlowProvider,
  Background,
} from "@xyflow/react";
import { useShallow } from "zustand/shallow";

import useStore, { type RFState } from "./store";
import { MindMapNode } from "./components/mind-map-node";
import { MindMapEdge } from "./components/mind-map-edge";
import "./styles.css";

const selector = (state: RFState) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  addChildNode: state.addChildNode,
  updateNodeMode: state.updateNodeMode,
  updateNodeLabel: state.updateNodeLabel,
});

const nodeTypes = {
  mindmap: MindMapNode,
};

const edgeTypes = {
  mindmap: MindMapEdge,
};

const nodeOrigin: NodeOrigin = [0.5, 0.5];
const connectionLineStyle = { stroke: "#F6AD55", strokeWidth: 3 };
const defaultEdgeOptions = { style: connectionLineStyle, type: "mindmap" };

function Flow() {
  // whenever you use multiple values, you should use shallow for making sure that the component only re-renders when one of the values change
  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    addChildNode,
    updateNodeMode,
  } = useStore(useShallow(selector));
  const connectingNodeId = useRef<string | null>(null);
  const store = useStoreApi();
  const { screenToFlowPosition } = useReactFlow();

  const getChildNodePosition = (
    event: MouseEvent | TouchEvent,
    parentNode?: InternalNode,
  ) => {
    const { domNode } = store.getState();

    if (
      !domNode ||
      !parentNode?.internals.positionAbsolute ||
      !parentNode?.measured.width ||
      !parentNode?.measured.height
    ) {
      return;
    }

    const isTouchEvent = "touches" in event;
    const x = isTouchEvent ? event.touches[0].clientX : event.clientX;
    const y = isTouchEvent ? event.touches[0].clientY : event.clientY;

    // Convert screen coordinates to flow coordinates
    const panePosition = screenToFlowPosition({
      x,
      y,
    });

    // Calculate position relative to parent node, accounting for nodeOrigin
    return {
      x:
        panePosition.x -
        parentNode.internals.positionAbsolute.x -
        parentNode.measured.width * nodeOrigin[0],
      y:
        panePosition.y -
        parentNode.internals.positionAbsolute.y -
        parentNode.measured.height * nodeOrigin[1],
    };
  };

  const onConnectStart: OnConnectStart = useCallback((_, { nodeId }) => {
    connectingNodeId.current = nodeId;
  }, []);

  const onConnectEnd: OnConnectEnd = useCallback(
    (event) => {
      const { nodeLookup } = store.getState();
      const targetIsPane = (event.target as Element).classList.contains(
        "react-flow__pane",
      );
      const node = (event.target as Element).closest(".react-flow__node");

      console.log({ node });

      if (targetIsPane && connectingNodeId.current) {
        const parentNode = nodeLookup.get(connectingNodeId.current);
        const childNodePosition = getChildNodePosition(event, parentNode);

        if (parentNode && childNodePosition) {
          addChildNode(parentNode, childNodePosition);
        }
      } else if (connectingNodeId.current) {
        console.log("connectingNodeId.current", connectingNodeId.current);
        updateNodeMode(connectingNodeId.current, "edit");
      }
    },
    [getChildNodePosition],
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      onConnectStart={onConnectStart}
      onConnectEnd={onConnectEnd}
      nodeOrigin={nodeOrigin}
      connectionLineStyle={connectionLineStyle}
      defaultEdgeOptions={defaultEdgeOptions}
      connectionLineType={ConnectionLineType.Straight}
      fitView
      className="mind-map"
    >
      <Controls showInteractive={false} />
      <Panel position="top-left">React Flow Mind Map</Panel>
      <Background />
    </ReactFlow>
  );
}

export function MindMap() {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}
