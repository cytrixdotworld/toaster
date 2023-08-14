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
      }  ${position === "top-right" && "top-6 right-6 flex-col-reverse"}
      flex justify-end gap-y-4 w-fit`}
    >
      <Toast type="success">action success</Toast>
      <Toast type="error">action failed</Toast>
      <Toast type="info">this action is irreversible</Toast>
    </div>
  );
}
