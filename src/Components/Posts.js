import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import axios from "axios";
import PostTable from "./PostTable";
import "../css/Posts.css";
import PostForm from "./PostForm";

const API_URL = "https://jsonplaceholder.typicode.com";
const EDIT = "EDIT";
const DELETE = "DELETE";

function Posts() {
  const [postData, setPostData] = useState([
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 2,
      id: 2,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 3,
      id: 3,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 4,
      id: 4,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
    userId: 1,
      id: 5,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 2,
      id: 6,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 3,
      id: 7,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 4,
      id: 8,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    }
  ]);
  const [formData, setFormData] = useState({
    id: "",
    userId: "",
    title: "",
    body: "",
  });
  const [showForm, setShowForm] = useState(false);

  // CRUD Operations here
  const getPosts = async () => {
    try {
      const res = await axios.get(`${API_URL}/posts`);
      setPostData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePosts = async (id) => {
    try {
      await axios.delete(`${API_URL}/posts/${id}`);
      setPostData(
        postData.filter((element) => {
          return element.id !== id;
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const createPosts = async () => {
    try {
      const res = await axios.post(`${API_URL}/posts`, {
        body: JSON.stringify(formData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = res.data;
      console.log(data);
      formData.id = data.id;
      setPostData([formData, ...postData]);
      setFormData({
        id: "",
        userId: "",
        title: "",
        body: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const udpatePosts = async (id) => {
    try {
      const res = await axios.put(`${API_URL}/posts/${id}`, {
        body: JSON.stringify(formData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = res.data;
      const tempPostData = postData.filter((each) => {
        return each.id !== id;
      });
      setPostData([formData, ...tempPostData]);
      setFormData({
        id: "",
        userId: "",
        title: "",
        body: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = ({ target: { id, value } }) => {
    //   console.log(id, value);
    setFormData({ ...formData, [id]: value });
    //Very Very important. please check above assignments
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target, formData);
    if (formData.id === "") {
      createPosts();
    } else {
      udpatePosts(formData.id);
    }
    // setShowForm(!showForm);
  };

  //   Performing Object destructuing below
  const handleAction = ({ tag, id }) => {
    console.log(`Performing action ${tag} ${id}`);
    switch (tag) {
      case EDIT:
        console.log("Edit");
        setFormData(
          postData.filter((element) => {
            return element.id === id;
          })[0]
        );
        setShowForm(true);
        break;
      case DELETE:
        console.log("DELETE");
        deletePosts(id);
        break;
      default:
        console.log("No action Performed");
        break;
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {/* {console.log(postData)} */}
        <div className="container justify-content-center  mt-4 p-2 ">
          <div className="row ">
            <div className="col m-1">
              {/* <div className="input-group m-1"> */}
                <input
                  type="text"
                  className="form-control "
                  placeholder="Search..."
                />
              {/* </div> */}
            </div>
            <div className="col-12 col-md-2 d-flex justify-content-end m-1">
              <button
                className="btn btn-success"
                onClick={() => {
                  setShowForm(!showForm);
                  setFormData({
                    id: "",
                    userId: "",
                    title: "",
                    body: "",
                  })
                }}
              >
                Add New
              </button>
            </div>
          </div>
          {showForm ? (
            <PostForm
              formData={formData}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
            />
          ) : (
            <></>
          )}
          <div className="mt-5 post-bg">
            <PostTable postData={postData} handleAction={handleAction} />
          </div>
        </div>
    </>
  );
}

export default Posts;
