import React, { createContext, useCallback, useContext, useState } from 'react';

const ToastContext = createContext();

export default function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback(({ message, variant }) => {
    const toast = {
      id: crypto.randomUUID(),
      message,
      variant,
    };
    setToasts((prev) => prev.concat(toast));
  }, []);
  const dismissAllToasts = useCallback(() => {
    setToasts([]);
  }, []);
  const dismissToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider
      value={{ addToast, dismissAllToasts, dismissToast, toasts }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export function useToasts() {
  return useContext(ToastContext);
}
