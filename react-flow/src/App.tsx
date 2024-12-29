import { Link, Routes, Route } from "react-router";
import { WebAudioExample } from "./web-audio";
import { StarterExample } from "./starter-example";
import { MindMap } from "./mind-map";

const exampleRoutes = [
  {
    path: "/",
    label: "Starter",
    element: <StarterExample />,
  },
  {
    path: "/web-audio",
    label: "Web Audio",
    element: <WebAudioExample />,
  },
  {
    path: "/mind-map",
    label: "Mind Map",
    element: <MindMap />,
  },
];

export default function App() {
  return (
    <div className="">
      <div className="flex items-center justify-center gap-2 my-4">
        {exampleRoutes.map((example) => (
          <Link
            key={example.path}
            to={example.path}
            className="text-neutral-800 dark:text-neutral-200 p-2 rounded-md cursor-pointer hover:underline"
          >
            {example.label}
          </Link>
        ))}
      </div>
      <div className="h-[60vh] w-[80vw] mx-auto mt-10">
        <Routes>
          {exampleRoutes.map((example) => (
            <Route
              key={example.path}
              path={example.path}
              element={example.element}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
}
