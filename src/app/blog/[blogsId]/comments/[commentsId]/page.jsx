"use client"

const Comments = ({ params }) => {
    console.log(params);
  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <h1>Blogs ID: {params.blogsId}</h1>
      <h1>Comments ID: {params.commentsId}</h1>
    </div>
  );
};

export default Comments;
