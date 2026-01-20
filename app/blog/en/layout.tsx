import { ReactNode } from "react";

export default function BlogEnLayout({ children }: { children: ReactNode }) {
  return <div className="font-sans">{children}</div>;
}
