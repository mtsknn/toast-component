import React, { useEffect } from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { useToasts } from '../ToastProvider';

function ToastShelf() {
  const { dismissAllToasts, dismissToast, toasts } = useToasts();

  useEffect(() => {
    const listener = (event) => {
      if (event.code === 'Escape') {
        dismissAllToasts();
      }
    };

    window.addEventListener('keydown', listener);

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, [dismissAllToasts]);

  if (toasts.length === 0) {
    return null;
  }

  return (
    <ol
      aria-label="Notification"
      aria-live="polite"
      className={styles.wrapper}
      role="region"
    >
      {toasts.map((toast) => (
        <li className={styles.toastWrapper} key={toast.id}>
          <Toast
            onDismiss={() => dismissToast(toast.id)}
            variant={toast.variant}
          >
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
