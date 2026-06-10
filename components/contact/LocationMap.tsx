export default function LocationMap() {
  return (
    <div className="contact-page-map pb-120 rpb-90 wow fadeInUp delay-0-2s">
      <div className="container">
        <div className="our-location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.82229406758!2d90.25487734999999!3d23.78106725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b97%3A0x2f6e6bfe0fc3b89b!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1663473911885!5m2!1sen!2sbd"
            style={{ border: 0, width: "100%", height: "450px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
