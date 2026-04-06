import React from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    name: 'Little Miss Sunshine',
    text: "Decorations were done excellently well. It was a perfect touch to Jossel's birthday, making it extra special with your amazing talent. You went above and beyond to add the spark to the celebration. God bless you in your wonderful gift of decorations in making others happy. Guest really appreciated it too. Thankyou very much. Would definitely recommend you to others.",
    event: "Birthday Celebration"
  },
  {
    name: 'Sylvester Paul',
    text: "Jyona Decoration: The decoration was elegant, well-coordinated, and beautifully enhanced the overall ambiance of the wedding. The attention to detail and creativity were truly impressive. I would definitely recommend their decoration services to others for weddings and special events.♥️ Sylvester and Supriya",
    event: "Wedding Decoration"
  },
  {
    name: 'Sudhir Paul',
    text: "Fantastic job for my sons birthday , the jungle themed decorations were absolutely stunning- vibrant, creative and beautifully detailed , perfect for the occasion . Highly recommended , they made our little one’s first birthday a celebration to remember ❤️",
    event: "Son's First Birthday"
  },
  {
    name: 'Srikanth Kolli',
    text: "The birthday decoration for my son was really wonderful and nice. We liked it a lot and were fully satisfied. Everything looked beautiful, and it made the day special. Thank you for the great work!",
    event: "Birthday Decoration"
  },
  {
    name: 'AK priya',
    text: "\"I absolutely love the decoration work you did for my son's birthday! It really brought the whole celebration to life, and everyone was so impressed!\" thank you so much. ❤️🙏🏼🥳",
    event: "Son's Birthday"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-dark">
      <div className="container">
        <div className="section-header text-center" style={{ marginBottom: '3.5rem' }}>
          <h2 className="section-title">Kind <span className="text-gold">Words</span></h2>
          <p className="section-subtitle">Real feedback from our happy clients who trusted us with their special moments.</p>
        </div>

        <div className="testimonials-grid">
          {testimonialsData.map((testimonial, index) => (
            <div className="testimonial-card glass" key={index}>
              <div className="quote-icon text-gold">“</div>
              <div className="testimonial-content">
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="rating text-gold">
                  ★★★★★
                </div>
              </div>
              <div className="testimonial-footer">
                <div className="avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="event-type">{testimonial.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
