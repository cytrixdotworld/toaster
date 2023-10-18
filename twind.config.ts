import { defineConfig, Preset } from "https://esm.sh/@twind/core@1.1.3";
import presetTailwind from "https://esm.sh/@twind/preset-tailwind@1.1.4";
import presetAutoprefix from "https://esm.sh/@twind/preset-autoprefix@1.0.7";
import presetToasterAnimations from "./preset.ts";

export default {
  ...defineConfig({
    presets: [
      presetTailwind() as Preset,
      presetAutoprefix(),
      presetToasterAnimations() as Preset,
    ],
    theme: {
      fontFamily: {
        sans: ["Instrument Sans", "system-ui"],
      },
    },
  }),
  selfURL: import.meta.url,
};
