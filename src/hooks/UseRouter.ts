import { useState } from "react";

export const useRouter = () => {
  const [currentPath, setCurrentPath] = useState("/");

  const navigate = (path: string) => {
    setCurrentPath(path);
    window.history.pushState({}, "", path);
  };

  return { currentPath, navigate };
};
