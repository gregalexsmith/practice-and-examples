import {
  applyNodeChanges,
  applyEdgeChanges,
  Node,
  Edge,
  NodeChange,
  EdgeChange,
  Connection,
} from "@xyflow/react";
import { nanoid } from "nanoid";
import { createWithEqualityFn } from "zustand/traditional";
import {
  connect,
  disconnect,
  isRunning,
  removeAudioNode,
  toggleAudio,
  updateAudioNode,
} from "./audio";

export type State = {
  nodes: Node[];
  edges: Edge[];
  isRunning: boolean;
  toggleAudio: () => void;

  onNodesChange: (changes: NodeChange[]) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateNode: (id: string, data: any) => void;
  removeNodes: (nodes: Node[]) => void;

  onEdgesChange: (changes: EdgeChange[]) => void;
  addEdge: (connection: Connection) => void;
  onEdgesDelete: (edges: Edge[]) => void;
};

export const useStore = createWithEqualityFn<State>((set, get) => ({
  nodes: [
    {
      type: "osc",
      id: "a",
      data: { frequency: 220, type: "square" },
      position: { x: 0, y: 0 },
    },
    {
      type: "gain",
      id: "b",
      data: { gain: 0.5 },
      position: { x: 50, y: 50 },
    },
    {
      type: "out",
      id: "c",
      data: {},
      position: { x: -50, y: 100 },
    },
  ],
  edges: [],
  isRunning: isRunning(),

  toggleAudio() {
    toggleAudio().then(() => {
      set({ isRunning: isRunning() });
    });
  },

  updateNode(id, data) {
    updateAudioNode(id, data);
    set({
      nodes: get().nodes.map((node) =>
        node.id === id ? { ...node, data: { ...node.data, ...data } } : node,
      ),
    });
  },

  onNodesChange(changes: NodeChange[]) {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },

  removeNodes(nodes: Node[]) {
    for (const { id } of nodes) {
      removeAudioNode(id);
    }
  },

  addEdge(connection: Connection) {
    const id = nanoid(6);
    const edge: Edge = { id, ...connection };

    set({ edges: [edge, ...get().edges] });
    connect(connection.source, connection.target);
  },

  onEdgesChange(changes: EdgeChange[]) {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },

  onEdgesDelete(edges: Edge[]) {
    for (const { id } of edges) {
      disconnect(id);
    }
  },
}));
