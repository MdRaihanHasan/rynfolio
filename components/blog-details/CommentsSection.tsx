export default function CommentsSection() {
  return (
    <div className="content mt-65">
      <h3 className="comment-title">Comments</h3>
      <div className="comment-body wow fadeInUp delay-0-2s">
        <div className="author-thumb">
          <img src="/assets/images/blog/comment-author1.jpg" alt="Author" />
        </div>
        <div className="content">
          <ul className="blog-meta">
            <li>
              <h6>William L. Jackson</h6>
            </li>
            <li>
              <a href="#">May 25, 2023</a>
            </li>
          </ul>
          <p>
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit
            esse molestiae consequatur qui dolorem eum fugiat voluptas
          </p>
          <a className="read-more" href="#">
            Reply <i className="far fa-angle-right"></i>
          </a>
        </div>
      </div>
      <div className="comment-body comment-child wow fadeInUp delay-0-2s">
        <div className="author-thumb">
          <img src="/assets/images/blog/comment-author2.jpg" alt="Author" />
        </div>
        <div className="content">
          <ul className="blog-meta">
            <li>
              <h6>James M. Stovall</h6>
            </li>
            <li>
              <a href="#">May 25, 2023</a>
            </li>
          </ul>
          <p>
            At vero eoset accusamus dignissimos ducimus blanditiis sapiente
            praesentium voluptatum deleniti atque
          </p>
          <a className="read-more" href="#">
            Reply <i className="far fa-angle-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
