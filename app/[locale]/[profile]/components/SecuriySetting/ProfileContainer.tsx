// Main
import React, { ReactNode } from 'react';

// Interface
interface ProfileContainerType {
  children: ReactNode;
}

export default function ProfileContainer({ children }: ProfileContainerType) {
  return (
    <article className="w-10/12 rounded-lg  mx-auto mb-16">{children}</article>
  );
}
