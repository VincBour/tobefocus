import * as React from "react";

export interface BodyModalProps {}

export const BodyModal: React.FC<BodyModalProps> = ({ children }) => {
  return <div className="p-6 space-y-6">{children}</div>;
};

BodyModal.displayName = "BodyModal";
