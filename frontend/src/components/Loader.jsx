export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-50">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-4 border-orange-200 rounded-full animate-spin border-t-orange-500"></div>
        <div className="absolute inset-2 border-4 border-transparent rounded-full animate-spin border-r-orange-400" style={{ animationDirection: 'reverse' }}></div>
        
        <style>{`
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
          .animate-spin {
            animation: spin 1.5s linear infinite;
          }
        `}</style>
      </div>
      <span className="ml-4 text-xl font-semibold text-orange-500">Loading...</span>
    </div>
  );
}
