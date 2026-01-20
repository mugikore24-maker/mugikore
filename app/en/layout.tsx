import { ReactNode } from "react";

export default function EnLayout({ children }: { children: ReactNode }) {
  return <div className="font-sans">{children}</div>;
}
