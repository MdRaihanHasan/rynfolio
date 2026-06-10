"use client";

export default function CommentForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      id="comment-form"
      className="comment-form form-style-one pt-65 pb-55 mt-55 wow fadeInUp delay-0-2s"
      name="comment-form"
      onSubmit={handleSubmit}
    >
      <h5>Leave a Reply</h5>
      <div className="row mt-30">
        <div className="col-md-6">
          <div className="form-group">
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="form-control"
              placeholder="Full Name"
              required
            />
            <label htmlFor="full-name" className="for-icon">
              <i className="far fa-user"></i>
            </label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <input
              type="email"
              id="email-address"
              name="email-address"
              className="form-control"
              placeholder="Email Address"
              required
            />
            <label htmlFor="email-address" className="for-icon">
              <i className="far fa-envelope"></i>
            </label>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              className="form-control"
              rows={4}
              placeholder="write message"
              required
            ></textarea>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group mb-0">
            <button type="submit" className="theme-btn">
              Leave A Reply <i className="far fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
