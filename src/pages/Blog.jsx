import { useState } from "react";
import { data } from "../data/data";

function Blog() {
  const [blog, setBlog] = useState(data);
  const [showMore, setShowMore] = useState(false);

  const removeBlog = (id) => {
    let newBlog = blog.filter((element) => element.id !== id);
    setBlog(newBlog);
  };

  const showTextClick = (element) => {
    element.showMore = !element.showMore;
    setShowMore(!showMore);
  };

  if (blog.length === 0) {
    return (
      <div>
        <div className="reload">
          <h2>No articles more.</h2>
          <button
            className="btn-reload"
            onClick={() => window.location.reload(false)}> Click to reload articles.
          </button>
        </div>
      </div>
    );
  }

  return (
    <section>
      <div className="title">
      </div>
      <div className="blog-main">
        {blog.map((element) => {
          const { id, name, text, image, showMore } = element;
          return (
            <article className="one-blog" key={id}>
              <img src={image} alt={name} />
              <footer>
                <div className="description">
                  <h2 className="subtitle">{name}</h2>
                  <p className="blog-info">
                    {showMore ? text : text.substring(0, 750) + "....."}
                    <button
                      className="btn"
                      onClick={() => showTextClick(element)}
                    >
                      {showMore ? "show less" : "show more"}
                    </button>
                  </p>
                  <button className="delete-btn" onClick={() => removeBlog(id)}>
                    not interested
                  </button>
                </div>
              </footer>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Blog;
