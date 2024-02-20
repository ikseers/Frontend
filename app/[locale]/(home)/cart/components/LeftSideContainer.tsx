import React from 'react';

interface leftSideContainerType {
  children: React.ReactNode;
}
export default function leftSideContainer({ children }: leftSideContainerType) {
  return (
    <div className="p-5 bg-slate-100 dark:bg-zinc-950 mt-2 rounded-lg">
      {children}
    </div>
  );
}
