import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

export const TOAST_VARIANTS =
  /** @type {const} */
  (['notice', 'warning', 'success', 'error']);

const ICONS = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

/**
 * @typedef Props
 * @prop {React.ReactNode} children
 * @prop {() => void} onDismiss
 * @prop {typeof TOAST_VARIANTS[number]} variant
 */

/** @param {Props} props */
function Toast({ children, onDismiss, variant }) {
  const Icon = ICONS[variant];

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>{children}</p>
      <button className={styles.closeButton} onClick={() => onDismiss()}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
