import { Handle, Node, NodeProps, Position } from "@xyflow/react";
import { useRef, useState } from "react";
import useStore from "../store";

export type IMindMapNode = Node<
  {
    label: string;
  },
  "mindmap"
>;

export function MindMapNode({ id, data }: NodeProps<IMindMapNode>) {
  const [mode, setMode] = useState<"edit" | "view">("view");
  const inputRef = useRef<HTMLInputElement>(null);
  const updateNodeLabel = useStore((state) => state.updateNodeLabel);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateNodeLabel(id, event.target.value);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setMode("view");
    }
  };

  return (
    <>
      <div className="flex items-center justify-start h-7 z-[1] relative pr-2 pointer-events-none">
        <>
          <div className="flex items-center pointer-events-auto px-1">
            <div className="w-[14px] h-full flex items-center">
              <svg viewBox="0 0 24 24">
                <path
                  fill="#333"
                  stroke="#333"
                  strokeWidth="1"
                  d="M15 5h2V3h-2v2zM7 5h2V3H7v2zm8 8h2v-2h-2v2zm-8 0h2v-2H7v2zm8 8h2v-2h-2v2zm-8 0h2v-2H7v2z"
                />
              </svg>
            </div>
          </div>
          {mode === "edit" ? (
            <input
              ref={inputRef}
              defaultValue={data.label}
              className="nodrag"
              autoFocus
              onBlur={() => setMode("view")}
              onChange={onChange}
              onKeyDown={onKeyDown}
            />
          ) : (
            <div className="leading-none" onDoubleClick={() => setMode("edit")}>
              {data.label}
            </div>
          )}
        </>
      </div>

      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </>
  );
}