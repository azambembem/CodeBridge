const Icons = () => {
  return (
    <div className="w-[90%] mt-32 pl-12">
      <div className="flex flex-nowrap justify-between gap-8">
        {/* Sellers Active Card */}
        <div className="border border-gray-200 p-6 rounded flex flex-col items-center w-1/4">
          <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M20 7h-9m9 7h-9m9 7H5m6-14H5m6 7H5" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-1">10.5k</h2>
          <p className="text-center text-sm text-gray-600">
            Sellers active our site
          </p>
        </div>

        {/* Monthly Product Sale Card */}
        <div className="bg-red-500 text-white p-6 rounded flex flex-col items-center w-1/4">
          <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#E73C17"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-1">33k</h2>
          <p className="text-center text-sm">Monthly Productuct Sale</p>
        </div>

        {/* Customer Active Card */}
        <div className="border border-gray-200 p-6 rounded flex flex-col items-center w-1/4">
          <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="8" x2="8" y2="8" />
              <line x1="16" y1="16" x2="8" y2="16" />
              <line x1="10" y1="12" x2="3" y2="12" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-1">45.5k</h2>
          <p className="text-center text-sm text-gray-600">
            Customer active in our site
          </p>
        </div>

        {/* Annual Gross Sale Card */}
        <div className="border border-gray-200 p-6 rounded flex flex-col items-center w-1/4">
          <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="16" />
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-1">25k</h2>
          <p className="text-center text-sm text-gray-600">
            Annual gross sale in our site
          </p>
        </div>
      </div>
    </div>
  );
};

export default Icons;
