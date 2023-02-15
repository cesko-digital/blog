import { ReactNode, useState, useEffect } from "react";

/**
 * Only render child nodes on the client
 *
 * This is mostly a hack to prevent hydration errors in dates:
 *
 * https://stackoverflow.com/questions/50883916
 *
 * Eventually we should render most of the components at the
 * server side and throw this hack out.
 */
export default function ClientRender({ children }: { children: ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? <>{children}</> : null;
}
