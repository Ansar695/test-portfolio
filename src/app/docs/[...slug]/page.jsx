"use client";

const DocsSlug = ({ params }) => {
  console.log("Prams Slug::", params.slug);
  console.log("Params::", params);

  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <h1>
        DocsSlug: {params.slug}
      </h1>
    </div>
  );
};

export default DocsSlug;
