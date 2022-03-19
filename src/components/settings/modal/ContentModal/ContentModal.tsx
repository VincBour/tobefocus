import * as React from "react";

export interface ContentModalProps {}

export const ContentModal: React.FC<ContentModalProps> = ({ children }) => {
  return (
    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
      {children}
    </div>
  );
};

ContentModal.displayName = "ContentModal";
