export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>BlogLayout</h1>
      {children}
    </div>
  );
}
import { ReactNode } from "react";