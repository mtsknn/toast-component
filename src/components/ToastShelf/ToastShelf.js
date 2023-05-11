import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { useToasts } from '../ToastProvider';

function ToastShelf() {
  const { dismissToast, toasts } = useToasts();

  if (toasts.length === 0) {
    return null;
  }

  return (
    <ol className={styles.wrapper}>
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
