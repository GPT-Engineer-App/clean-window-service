const Testimonials = () => {
  return (
    <div className="text-center space-y-8">
      <h1 className="text-4xl font-bold">Testimonials</h1>
      <p className="text-lg">See what our satisfied customers have to say about our services.</p>
      <div className="space-y-4">
        <blockquote className="border-l-4 border-blue-500 pl-4">
          <p>"The best window cleaning service I've ever used. Highly recommend!"</p>
          <cite>- John Doe</cite>
        </blockquote>
        <blockquote className="border-l-4 border-blue-500 pl-4">
          <p>"Professional, efficient, and affordable. My windows have never looked better!"</p>
          <cite>- Jane Smith</cite>
        </blockquote>
      </div>
    </div>
  );
};

export default Testimonials;