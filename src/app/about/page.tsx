import Image from "next/image";

export default function AboutPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-blue-600">About Us</h1>
      <div>
        <p className="mt-4 text-gray-700">
          We are a team of professionals dedicated to delivering high-quality products and services
          tailored to your needs. Our mission is to help businesses thrive through innovative
          solutions.
        </p>
      </div>
      <div className="grid grid-cols-3 grid-rows-1 gap-4">
        <div>
          <Image
            src="/team.jpg"
            alt="Our Team"
            width={500} 
            height={300}
            className="mt-6 rounded-lg shadow-lg"
          />
          Technical Solution, anywhere, anytime
        </div>
        <div>
          <br />
          <br />
          <strong>Business Team Meeting In Boardroom:</strong>
          <br />
          This team is ready to brainstorm, tackle sales or come up with new business ideas as they
          gather around the boardroom table. With this many pie charts and graphs at hand, a group
          like this can only succeed.
          E-Learning-from professional & expert teachers. Improve your skills,
          move toward bright career
        </div>
      </div>
    </section>
  );
}
