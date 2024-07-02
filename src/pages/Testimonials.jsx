const Testimonials = () => {
  return (
    <div className="text-center space-y-8">
      <div className="background-icon window-cleaner"></div>
      <h1 className="text-4xl font-bold">Udtalelser</h1>
      <p className="text-lg">Se hvad vores tilfredse kunder siger om vores tjenester.</p>
      <div className="space-y-4">
        <blockquote className="border-l-4 border-blue-500 pl-4">
          <p>"Den bedste vinduespudsningsservice, jeg nogensinde har brugt. Kan varmt anbefales!"</p>
          <cite>- John Doe</cite>
        </blockquote>
        <blockquote className="border-l-4 border-blue-500 pl-4">
          <p>"Professionel, effektiv og overkommelig. Mine vinduer har aldrig set bedre ud!"</p>
          <cite>- Jane Smith</cite>
        </blockquote>
      </div>
    </div>
  );
};

export default Testimonials;