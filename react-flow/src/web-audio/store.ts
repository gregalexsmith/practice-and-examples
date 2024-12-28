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

export type State = {
  nodes: Node[];
  edges: Edge[];
  isRunning: boolean;
  onNodesChange: (changes: NodeChange[]) => void;
  onEdgesChange: (changes: EdgeChange[]) => void;
  addEdge: (connection: Connection) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateNode: (id: string, data: any) => void;
  toggleAudio: () => void;
};

export const useStore = createWithEqualityFn<State>((set, get) => ({
  nodes: [
    { id: "a", data: { label: "oscillator" }, position: { x: 0, y: 0 } },
    { id: "b", data: { label: "gain" }, position: { x: 50, y: 50 } },
    { id: "c", data: { label: "output" }, position: { x: -50, y: 100 } },
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
  ],
  edges: [],
  isRunning: false,
  toggleAudio() {
    set({ isRunning: !get().isRunning });
  },

  updateNode(id, data) {
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

  onEdgesChange(changes: EdgeChange[]) {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },

  addEdge(connection: Connection) {
    const id = nanoid(6);
    const edge: Edge = { id, ...connection };

    set({ edges: [edge, ...get().edges] });
  },
}));
