import { clsx } from "clsx";
import Loader from "./Loader";

const variants = {
  primary:
    "bg-primary-600 text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600",
  secondary:
    "bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
  danger:
    "bg-red-600 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600",
};

const sizes = {
  sm: "rounded px-2 py-1 text-sm",
  md: "rounded-md px-2.5 py-1.5 text-sm",
  lg: "rounded-md px-3 py-2 text-sm",
  xl: "rounded-md px-3.5 py-2.5 text-sm",
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  loading = false,
  disabled = false,
  children,
  ...props
}) {
  return (
    <button
      type="button"
      disabled={disabled || loading}
      className={clsx(
        "font-semibold",
        variants[variant],
        sizes[size],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      {...props}
    >
      <span className={clsx("flex items-center justify-center gap-x-2")}>
        {loading && <Loader />}
        {children}
      </span>
    </button>
  );
}
