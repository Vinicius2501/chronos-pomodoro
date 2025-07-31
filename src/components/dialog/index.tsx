import type { ToastContentProps } from 'react-toastify';
import styles from './styles.module.css';
import { DefaultButton } from '../DefaultButton';
import { CircleCheckIcon, CircleXIcon } from 'lucide-react';

export function Dialog({ closeToast, data }: ToastContentProps<string>) {
  return (
    <>
      <div className={styles.container}>
        <p>{data}</p>
        <div className={styles.buttonsContainer}>
          <DefaultButton
            onClick={() => closeToast(true)}
            icon={<CircleCheckIcon />}
            aria-label='confirmar ação e fechar'
            title='confirmar ação e fechar'
          />
          <DefaultButton
            onClick={() => closeToast(false)}
            icon={<CircleXIcon />}
            color='red'
            aria-label='Cancelar ação e fechar'
            title='Cancelar ação e fechar'
          />
        </div>
      </div>
    </>
  );
}
