import { clsx } from "clsx";

export default function Card({ children, className = "", title, action }) {
  return (
    <div className={`rounded-lg bg-white dark:bg-gray-800 shadow ${className}`}>
      {(title || action) && (
        <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
          <div className="flex items-center justify-between">
            {title && (
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                {title}
              </h3>
            )}
            {action && <div className="ml-4">{action}</div>}
          </div>
        </div>
      )}
      <div className="px-4 py-5 sm:p-6">{children}</div>
    </div>
  );
}
