export const Modal: React.FC<{ onClose: () => void; children: React.ReactNode }> = ({
  onClose,
  children,
}) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] p-12 relative overflow-y-auto"
        onClick={(e) => e.stopPropagation()} 
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900"
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};
