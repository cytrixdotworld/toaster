import { useSignal } from "@preact/signals";
import { useId } from "preact/hooks";
import Toaster, { ToasterPosition } from "../components/toaster.tsx";
import { ToastType } from "../components/toast.tsx";

export default function ToasterDemo() {
  const toastPositionId = useId();
  const toastTypeId = useId();
  const toasterPosition = useSignal<ToasterPosition>("bottom-left");
  const toastType = useSignal<ToastType>("info");

  const sendToast = () => {
    console.log(toasterPosition.value);
  };

  return (
    <>
      <div class="flex gap-y-2 flex-col max-w-sm w-full">
        <div class="flex flex-col gap-y-4">
          <div class="flex items-center justify-between">
            <label for={toastPositionId} class="whitespace-nowrap">
              Toast position:
            </label>
            <select
              class="border px-4 py-2 rounded-md w-fit"
              id={toastPositionId}
              value={toasterPosition.value}
              onChange={(e) =>
                toasterPosition.value = e.currentTarget
                  .value as ToasterPosition}
            >
              <option value="bottom-left">Bottom Left</option>
              <option value="bottom-center">Bottom Center</option>
              <option value="bottom-right">Bottom Right</option>
              <option value="top-left">Top Left</option>
              <option value="top-center">Top Center</option>
              <option value="top-right">Top Right</option>
            </select>
          </div>
          <div class="flex justify-between items-center">
            <label for={toastTypeId} class="whitespace-nowrap">
              Toast Type:
            </label>
            <select
              class="border px-4 py-2 rounded-md w-fit"
              id={toastTypeId}
              value={toastType.value}
              onChange={(e) =>
                toastType.value = e.currentTarget.value as ToastType}
            >
              <option value="success">Success</option>
              <option value="error">Error</option>
              <option value="info">Info</option>
            </select>
          </div>
        </div>
        <button
          class="px-4 py-2 border rounded-md bg-zinc-600 text-white hover:brightness-110 active:brightness-90 transition"
          onClick={sendToast}
        >
          Send Toast
        </button>
      </div>
      <Toaster position={toasterPosition.value} />
    </>
  );
}
