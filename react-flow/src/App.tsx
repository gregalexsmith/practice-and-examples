import { useState } from 'react';
import StarterExample from './starter-example';

const examples = {
  starter: StarterExample,
} as const;

type Example = keyof typeof examples;

export default function App() {
  const [example, setExample] = useState<Example>('starter');

  return (
    <div className="">
      <div className="flex items-center justify-center gap-2 my-4">
        {Object.keys(examples).map((example) => (
          <button
            key={example}
            onClick={() => setExample(example as Example)}
            className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 p-2 rounded-md"
          >
            {example}
          </button>
        ))}
      </div>
      <div className="h-[60vh] w-[80vw] mx-auto mt-10">
        {examples[example]()}
      </div>
    </div>
  );
}
