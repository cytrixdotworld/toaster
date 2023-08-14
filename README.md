# Toaster

[`[demo]`](https://toaster.cytrix.world)&nbsp;&nbsp;&nbsp;&nbsp;[`[tags]`](https://github.com/cytrixdotworld/toaster/tags)&nbsp;&nbsp;&nbsp;&nbsp;[`[deno.land/x]`](https://deno.land/x/fresh_toaster)

A simple toast system made for the fresh framework.

## How to use

0. Import the twind preset. It contains the animations for the toasts.

```diff
// twind.config.ts using twind v1

import { defineConfig, Preset } from "https://esm.sh/@twind/core@1.1.3";
import presetTailwind from "https://esm.sh/@twind/preset-tailwind@1.1.4";
import presetAutoprefix from "https://esm.sh/@twind/preset-autoprefix@1.0.7";
+import * as freshToaster from "https://deno.land/x/fresh_toaster@v1.0.0/preset.ts";

export default {
  ...defineConfig({
    presets: [
      presetTailwind() as Preset,
      presetAutoprefix(),
+      presetToasterAnimations() as Preset,
    ],
  }),
  selfURL: import.meta.url,
};
```

1. Import the module and provide the context:

```tsx
import { useToaster } from "https://deno.land/x/fresh_toaster@v1.0.0/hooks/index.tsx";
import ToastContext from "https://deno.land/x/fresh_toaster@v1.0.0/contexts/toastContext.tsx";
export default function Example() {
  // toasts is a list containg, well the toasts
  // toaster is an object for controlling the toaster
  const [toasts, toaster] = useToaster();
  return (
    <ToastContext.Provider value={toasts.value}>
      <Toaster position="bottom-center" />
    </ToastContext.Provider>
  );
}
```

2. You can now use the toaster!

```tsx
const successChildren = <a href="https://fresh.deno.dev">a jsx element</a>; // strings works as well
toaster.success({
  children: successChildren,
  timeout: 3000, // time in ms that the toast will disappear
});
```
