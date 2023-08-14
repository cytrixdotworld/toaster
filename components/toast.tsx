import type { ComponentChildren, Ref } from "preact";
import IconInfoCircleFilled from "https://deno.land/x/tabler_icons_tsx@0.0.4/tsx/info-circle-filled.tsx";
import IconCircleCheckFilled from "https://deno.land/x/tabler_icons_tsx@0.0.4/tsx/circle-check-filled.tsx";
import IconAlertCircleFilled from "https://deno.land/x/tabler_icons_tsx@0.0.4/tsx/alert-circle-filled.tsx";
import { useEffect } from "preact/hooks";
import { useSignal } from "@preact/signals";

export type ToastType = "error" | "success" | "info";

export interface ToastProps {
  type: ToastType;
  children: ComponentChildren;
  timeout?: number;
}

export default function Toast(
  { type = "info", children, timeout = 3000 }: ToastProps,
) {
  const cleared = useSignal(false);

  useEffect(() => {
    const clearTimer = setTimeout(() => {
      cleared.value = true;
    }, timeout);
    return () => clearTimeout(clearTimer);
  }, []);

  return (
    <div
      class={`rounded-lg shadow-lg bg-white px-4 py-2 border flex items-center gap-x-2 h-fit ${
        cleared.value ? "animate-toast-leave" : "animate-toast-enter"
      }`}
    >
      {type === "success" && (
        <IconCircleCheckFilled class="text-green-500 h-5 w-5" />
      )}
      {type === "error" && (
        <IconAlertCircleFilled class="text-red-500 h-5 w-5" />
      )}
      {type === "info" &&
        <IconInfoCircleFilled class="text-zinc-500 h-5 w-5" />}
      {children}
    </div>
  );
}
