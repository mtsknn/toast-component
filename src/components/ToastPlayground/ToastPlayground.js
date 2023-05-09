import React, { useState } from 'react';

import Button from '../Button';
import Toast, { TOAST_VARIANTS } from '../Toast';

import styles from './ToastPlayground.module.css';

function ToastPlayground() {
  const [message, setMessage] = useState('');
  const [variant, setVariant] = useState(TOAST_VARIANTS[0]);

  const [showToast, setShowToast] = useState(false);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {showToast && (
        <Toast onDismiss={() => setShowToast(false)} variant={variant}>
          {message}
        </Toast>
      )}

      <form
        className={styles.controlsWrapper}
        onSubmit={(e) => {
          e.preventDefault();
          setShowToast(true);
        }}
      >
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              className={styles.messageInput}
              id="message"
              onChange={(event) => setMessage(event.target.value)}
              value={message}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {TOAST_VARIANTS.map((variantType) => {
              const id = `variant-${variantType}`;
              return (
                <label htmlFor={id} key={variantType}>
                  <input
                    checked={variant === variantType}
                    id={id}
                    name="variant"
                    onChange={() => setVariant(variantType)}
                    type="radio"
                    value={variantType}
                  />
                  {variantType}
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
