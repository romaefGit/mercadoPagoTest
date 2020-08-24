import { useState } from "react";

export function useMouseBehaviour() {
  const [value, setValue] = useState(false);

  return [value, setValue];
}