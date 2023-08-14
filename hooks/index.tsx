import { ToastProps } from "../components/toast.tsx";
import { useSignal } from "@preact/signals";

function useToaster() {
  const toasts = useSignal<ToastProps[]>([]);
  return [toasts, {
    success: (
      children: ToastProps["children"],
      timeout?: ToastProps["timeout"],
    ) => {
      toasts.value = [...toasts.value, { type: "success", children, timeout }];
    },
    error: (
      children?: ToastProps["children"],
      timeout?: ToastProps["timeout"],
      err?: Error,
    ) => {
      toasts.value = [...toasts.value, {
        type: "error",
        children: children ?? `Action failed with ${err?.message}`,
        timeout,
      }];
      if (err) console.error(err);
    },
    info: (
      children: ToastProps["children"],
      timeout?: ToastProps["timeout"],
    ) => {
      toasts.value = [...toasts.value, { type: "info", children, timeout }];
    },
  }] as const;
}

export { useToaster };
