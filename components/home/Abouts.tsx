const Abouts = () => {
  return (
    <section id="about" className="section">
      <div className="grid-2-col">
        <div className="p-4 border-[3px] border-solid border-teal rounded-lg">
          <img src={'/images/About.jpg'} alt="" loading="lazy" />
        </div>

        <div>
          <p className="font-bold text-[1.5rem] sm:text-[1.875rem] mb-5">
            We provide the <br /> best{' '}
            <span className="text-teal">online courses</span>
          </p>
          <p className="description mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
            commodi cum soluta. Repellat veritatis repudiandae libero quia modi
            vitae earum enim, reiciendis harum ipsa nesciunt odit fugiat iste!
            Sint, dignissimos.
          </p>
          <button className="btn-type-1 bd-gray">Know more</button>
        </div>
      </div>
    </section>
  );
};

export default Abouts;
