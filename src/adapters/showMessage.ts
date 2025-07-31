import { toast } from 'react-toastify';
import { Dialog } from '../components/dialog';

export const showMessage = {
  success: (msg: string) => toast.success(msg),
  error: (msg: string) => toast.error(msg),
  warn: (msg: string) => toast.warn(msg),
  warning: (msg: string) => toast.warning(msg),
  infor: (msg: string) => toast.info(msg),
  dismiss: () => toast.dismiss(),
  confirm: (data: string, onClosing: (reason: boolean) => void) =>
    toast(Dialog, {
      data: data,
      onClose: reason => {
        if (reason) return onClosing(true);
        return onClosing(false);
      },
      autoClose: false,
      closeOnClick: false,
      closeButton: false,
      draggable: false,
      onClick: reason => console.log(reason),
    }),
};
