import { useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  ariaLabel: string;
  children: React.ReactNode;
}

export default function Modal({ open, onClose, ariaLabel, children }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="card-elevated relative max-h-[90vh] w-[92vw] max-w-xl overflow-y-auto rounded-xl bg-background p-0 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button aria-label="Fechar" className="icon-button absolute right-3 top-3 w-10 h-10 text-accent text-2xl" onClick={onClose}>×</button>
        {children}
      </div>
    </div>,
    document.body
  );
}
