"use client";

import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> & {
  Title: React.FC<{ children: React.ReactNode }>;
  Content: React.FC<{ children: React.ReactNode }>;
  Actions: React.FC<{ children: React.ReactNode }>;
} = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="sm:absolute sm:top-24 bg-white max-h-[90%] sm:max-h-[80%] 2xl:max-h-[100%] rounded-lg shadow-lg max-w-3xl w-full mx-4 p-6 flex !flex-col">
        {children}
      </div>
    </div>
  );
};

Modal.Title = ({ children }) => (
  <div className="flex justify-between items-center mb-4 flex-shrink-0">
    <h2 className="text-xl font-semibold text-gray-800">{children}</h2>
  </div>
);

Modal.Content = ({ children }) => (
  <div className="flex-1 mb-4 max-h-90 overflow-y-auto">{children}</div>
);

Modal.Actions = ({ children }) => (
  <div className="flex justify-end">{children}</div>
);
