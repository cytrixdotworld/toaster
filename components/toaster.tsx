import ToastContext from "../contexts/toastContext.tsx";
import Toast, { ToastProps } from "./toast.tsx";

export type ToasterPosition =
  | "bottom-left"
  | "bottom-center"
  | "bottom-right"
  | "top-left"
  | "top-center"
  | "top-right";

export interface ToasterProps {
  position?: ToasterPosition;
}

export default function Toaster({ position = "bottom-center" }: ToasterProps) {
  return (
    <div
      class={`absolute ${
        position === "bottom-left" && "bottom-6 left-6 flex-col"
      } ${position === "bottom-center" && "bottom-6 left-50 flex-col"} ${
        position === "bottom-right" && "bottom-6 right-6 flex-col"
      } ${position === "top-left" && "top-6 left-6 flex-col-reverse"} ${
        position === "top-center" && "top-6 left-50 flex-col-reverse"
      } ${
        position === "top-right" && "top-6 right-6 flex-col-reverse"
      } flex justify-end gap-y-4 w-fit`}
    >
      <ToastContext.Consumer>
        {(toasts) =>
          toasts.map((toast, index) => (
            <Toast key={index} type={toast.type} timeout={toast.timeout}>
              {toast.children}
            </Toast>
          ))}
      </ToastContext.Consumer>
    </div>
  );
}
