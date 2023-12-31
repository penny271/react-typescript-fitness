import { useState, useEffect } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // query = "(min - width: 1060px)"
    const media = window.matchMedia(query);
    // media :>>  MediaQueryList {media: '(min-width: 1060px)', matches: true, onchange: null}
    console.log('media :>> ', media);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);
  return matches;
};

export default useMediaQuery;