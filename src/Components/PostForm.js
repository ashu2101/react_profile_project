import React from "react";

function PostForm({ formData, handleSubmit, handleChange }) {
  return (
    <>
      <form
        className="border border-success p-4 m-2 text-white"
        onSubmit={(event) => handleSubmit(event)}
      >
        <div className="form-group mt-2">
          <label htmlFor="userId">User Id</label>
          <input
            type="number"
            className="form-control"
            id="userId"
            placeholder="User Id"
            value={formData.userId}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Title"
            value={formData.title}
            onChange={(event) => handleChange(event)}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="body">Body</label>
          <input
            type="text"
            className="form-control"
            id="body"
            placeholder="Body"
            value={formData.body}
            onChange={(event) => handleChange(event)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </>
  );
}

export default PostForm;
