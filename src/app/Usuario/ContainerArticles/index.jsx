import React from "react";

function ContainerArticles({ children }) {
  return (
    <div className="bg-white p-4 w-full rounded border-l-8  border-blue1">
      {" "}
      {children}{" "}
    </div>
  );
}

export default ContainerArticles;
