import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const Toast = ({ toast, onClose }) => {
  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-rose-500 shrink-0" />,
    info: <Info className="w-5 h-5 text-brand-500 shrink-0" />
  };

  return (
    <aside
      aria-label="Notification alerts"
      className="fixed bottom-6 right-6 z-50 max-w-md animate-slide-up"
    >
      <div
        role="status"
        aria-live="polite"
        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl text-slate-800 dark:text-slate-100"
      >
        {icons[toast.type] || icons.info}
        <p className="text-sm font-medium leading-snug">{toast.message}</p>
        <button
          onClick={onClose}
          type="button"
          aria-label="Dismiss notification"
          className="ml-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
};
