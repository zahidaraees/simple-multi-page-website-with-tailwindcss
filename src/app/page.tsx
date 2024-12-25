import Image from "next/image"; // Import the Image component

export default function HomePage() {
  return (
    <div>
      <section className="text-center py-16 rounded-lg shadow-lg bg-white">
        <h1 className="text-4xl font-bold text-blue-600">
          Welcome to ZR Professional Website
        </h1>
        <p className="mt-4 text-gray-700">
          We create innovative solutions to help you achieve your goals.
        </p>
        <div className="mt-8">
          <a
            href="/about"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Learn More
          </a>
          <a
            href="/contact"
            className="ml-4 px-6 py-2 bg-gray-100 text-blue-600 rounded-lg hover:bg-gray-200"
          >
            Contact Us
          </a>
        </div>
      </section>
      <div className="grid grid-cols-3 grid-rows-1 gap-4">
        <div>
          <Image
            src="/team.jpg"
            alt="Our Team"
            width={500} // Replace with an appropriate width
            height={300} // Replace with an appropriate height
            className="mt-6 rounded-lg shadow-lg"
          />
          Technical Solution, anywhere, anytime
        </div>
        <div>
          <Image
            src="/e-learning.jpg"
            alt="E-Learning"
            width={500} // Replace with an appropriate width
            height={300} // Replace with an appropriate height
            className="mt-6 rounded-lg shadow-lg"
          />
          E-Learning-from professional &amp; expert teachers. Improve your skills,
          move toward bright career.
        </div>
        <div>
          <Image
            src="/tech01.jpg"
            alt="Technology"
            width={500} // Replace with an appropriate width
            height={300} // Replace with an appropriate height
            className="mt-6 rounded-lg shadow-lg"
          />
          Learn about the latest technology trends and innovations.
        </div>
      </div>
    </div>
  );
}
