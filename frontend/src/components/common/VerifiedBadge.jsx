// VerifiedBadge.jsx
const VerifiedBadge = ({ isVerified }) => (
  <span className={`inline-flex items-center px-2 py-1 rounded-full text-sm ${
    isVerified 
      ? 'bg-green-100 text-green-800' 
      : 'bg-yellow-100 text-yellow-800'
  }`}>
    {isVerified ? 'Verified' : 'Unverified'}
  </span>
);

// Pagination.jsx
const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-center gap-2 mt-4">
    {[...Array(totalPages).keys()].map(page => (
      <button
        key={page+1}
        onClick={() => onPageChange(page+1)}
        className={`px-3 py-1 rounded ${
          currentPage === page+1 
            ? 'bg-blue-600 text-white' 
            : 'bg-gray-200 hover:bg-gray-300'
        }`}
      >
        {page+1}
      </button>
    ))}
  </div>
);
