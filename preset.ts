export default function presetToasterAnimations() {
  return {
    theme: {
      extend: {
        animation: {
          "toast-enter": "toastEnter 300ms ease-in-out forwards",
          "toast-leave": "toastLeave 300ms ease-in-out forwards",
        },
        keyframes: {
          "toastEnter": {
            from: {
              transform: "translateY(1rem)",
              opacity: 0,
            },
            to: {
              transform: "translateY(0)",
              opacity: 1,
            },
          },
          "toastLeave": {
            to: {
              opacity: 0,
            },
          },
        },
      },
    },
  };
}
