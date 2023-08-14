import { createContext } from "preact";
import { ToastProps } from "../components/toast.tsx";

const ToastContext = createContext<ToastProps[]>([]);

export default ToastContext;
