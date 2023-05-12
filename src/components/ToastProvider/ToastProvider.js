import React, { createContext, useCallback, useContext, useState } from 'react';
import useEscapeKey from '../../hooks/useEscapeKey';

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

  // Feels weird to have this here
  // but that's what Exercise 6 instructions said
  useEscapeKey(dismissAllToasts);

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
