import { X, ZoomIn } from 'lucide-react';

interface ImageLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title?: string;
  caption?: string;
}

export default function ImageLightboxModal({
  isOpen,
  onClose,
  imageUrl,
  title,
  caption,
}: ImageLightboxModalProps) {
  if (!isOpen) return null;

  return (
    <div
      id="image-lightbox-modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md transition-opacity duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] max-w-4xl overflow-hidden rounded-2xl bg-slate-900 border border-slate-700 p-2 sm:p-4 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="lightbox-close-button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/90 text-white hover:bg-slate-700 hover:text-amber-400 focus:outline-none transition border border-slate-600"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col items-center">
          <div className="max-h-[78vh] overflow-auto rounded-xl flex items-center justify-center bg-black/40">
            <img
              src={imageUrl}
              alt={title || 'Enlarged preview'}
              className="max-h-[75vh] w-auto object-contain rounded-lg shadow-md"
              referrerPolicy="no-referrer"
              loading="eager"
            />
          </div>
          {(title || caption) && (
            <div className="mt-3 text-center px-4 py-2">
              {title && <h4 className="text-base font-bold text-amber-400">{title}</h4>}
              {caption && <p className="text-xs sm:text-sm text-slate-300 mt-0.5">{caption}</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
