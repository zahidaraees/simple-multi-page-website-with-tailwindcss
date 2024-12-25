export default function ContactPage() {
  return (
    <div>
      <section className="text-center py-16 rounded-lg shadow-lg bg-white">
        <h1 className="text-4xl font-bold text-blue-600">Contact Us</h1>
        <p className="mt-4 text-gray-700">
          We would love to hear from you! Please fill out the form below or reach out to us directly.
        </p>
      </section>

      <div className="max-w-2xl mx-auto mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-700">Or reach us at:</p>
        <p className="text-blue-600 font-medium">contact@zrprofessional.com</p>
        <p className="text-gray-700">Phone: +1 111 111 111</p>
        <p className="text-gray-700">Address: 123 Innovation Drive, Uni Plaza, Karachi, Pakistan</p>
      </div>
    </div>
  );
}
