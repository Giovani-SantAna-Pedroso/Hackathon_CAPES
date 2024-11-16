import React from "react";

function ContainerArticles({ children }) {
  return (
    <div className="bg-gray-100 p-6 w-full rounded-lg border-l-4 border-blue-500 shadow-md hover:shadow-lg transition-shadow duration-300">
      {children}
    </div>
  );
}

export default ContainerArticles;
