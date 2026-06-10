import Link from "next/link";

export default function BlogDetailsContent() {
  return (
    <>
      <div className="content mt-35">
        <div className="blog-meta mb-30 wow fadeInUp delay-0-2s">
          <Link className="tag" href="/blog">
            Design
          </Link>
          <Link className="tag" href="/blog">
            Figma
          </Link>
        </div>
        <div className="author-date-share mb-40 wow fadeInUp delay-0-4s">
          <div className="author">
            <img src="/assets/images/blog/author.jpg" alt="Author" />
          </div>
          <div className="text">
            <span>Post By</span>
            <h5>Martin D. Rubio</h5>
          </div>
          <div className="text">
            <span>Published</span>
            <h5>September 25, 2023</h5>
          </div>
          <a href="#" className="details-btn">
            <i className="far fa-share-alt"></i>
          </a>
        </div>
      </div>
      <div className="image mb-35 wow fadeInUp delay-0-5s">
        <img src="/assets/images/blog/blog-details.jpg" alt="Blog Details" />
      </div>
      <div className="content wow fadeInUp delay-0-2s">
        <p className="big-letter">
          sSed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium totam rem aperiam eaque ipsa quae
          abillo inventore veritatis
        </p>
        <p>
          beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
          voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
          magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
          quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
          adipisci velit, sed quia non numquam eius modi tempora incidunt ut
          labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
          veniam, quis nostrum exercitationem ullam corporis suscipit
          laboriosam, nisi ut aliquid ex ea commodi consequature
        </p>
        <blockquote>
          Handling Mounting And Unmounting Of Given Navigation Routes In React
          Native
          <span className="blockquote-footer">Johnny M. Martin</span>
        </blockquote>
      </div>
      <div className="row gap-20">
        <div className="col-md-6">
          <div className="image mb-20 wow fadeInUp delay-0-2s">
            <img src="/assets/images/blog/blog-middle1.jpg" alt="Blog Middle" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="image mb-20 wow fadeInUp delay-0-4s">
            <img src="/assets/images/blog/blog-middle2.jpg" alt="Blog Middle" />
          </div>
        </div>
      </div>
      <div className="content mt-30 wow fadeInUp delay-0-2s">
        <h4>Get Your Service to Improve Business</h4>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
          enim ad minima veniam, quis nostrum exercitationem ullam
        </p>
        <div className="tag-share mt-45 py-30 wow fadeInUp delay-0-2s">
          <div className="item">
            <b>Tags</b>
            <div className="tag-coulds">
              <Link href="/blog">Design</Link>
              <Link href="/blog">Figma</Link>
              <Link href="/blog">Apps</Link>
            </div>
          </div>
          <div className="item">
            <b>Share</b>
            <div className="social-style-one">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="admin-comment mt-50 wow fadeInUp delay-0-2s">
        <div className="comment-body">
          <div className="author-thumb">
            <img src="/assets/images/blog/admin-author.jpg" alt="Author" />
          </div>
          <div className="content">
            <h5>Richard M. Fudge</h5>
            <p>
              We denounce with righteous indignation and dislike men beguiled
              and demoralized by the charms of pleasure of the moment
            </p>
            <div className="social-style-two mt-5">
              <Link href="/contact">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link href="/contact">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link href="/contact">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link href="/contact">
                <i className="fab fa-instagram"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="next-prev-post pt-50 pb-20 wow fadeInUp delay-0-2s">
          <div className="post-item">
            <div className="image">
              <img src="/assets/images/blog/post-prev.jpg" alt="Post" />
            </div>
            <div className="post-content">
              <span className="date">
                <i className="far fa-calendar-alt"></i>{" "}
                <a href="#">Sep 25, 2023</a>
              </span>
              <h6>
                <Link href="/blog-details">Tips For Conducting Studie</Link>
              </h6>
            </div>
          </div>
          <div className="post-item">
            <div className="image">
              <img src="/assets/images/blog/post-next.jpg" alt="Post" />
            </div>
            <div className="post-content">
              <span className="date">
                <i className="far fa-calendar-alt"></i>{" "}
                <a href="#">Sep 25, 2023</a>
              </span>
              <h6>
                <Link href="/blog-details">Usability With Participants</Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
