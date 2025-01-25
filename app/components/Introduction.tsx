const Introduction = () => {
  return (
    <section
      id="introduction"
      className="bg-black py-16 px-8 flex flex-col items-center"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <p className="text-sm font-semibold text-lightGreen uppercase tracking-wide">
            Introducing Zyypher
          </p>
        </div>
        <div className="mt-6">
        <h2 className="text-3xl md:text-4xl text-white font-normal !leading-[3rem]">
            We get it!{" "}
            <span className="text-gray-400">
              You need innovative solutions to thrive in the tech world, but
              building an in-house team can be expensive and time-consuming.
            </span>{" "}
            <br />
            <span className="text-white">That’s where Zyypher steps in.</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
