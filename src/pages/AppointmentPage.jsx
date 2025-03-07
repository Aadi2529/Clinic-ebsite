const AppointmentPage = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-2xl font-bold text-center text-blue-600">Book an Appointment</h2>
  
          <form className="mt-4 space-y-4">
            <div>
              <label className="block text-gray-600">Full Name</label>
              <input type="text" className="w-full p-2 border rounded-lg" placeholder="Enter your name" />
            </div>
  
            <div>
              <label className="block text-gray-600">Email</label>
              <input type="email" className="w-full p-2 border rounded-lg" placeholder="Enter your email" />
            </div>
  
            <div>
              <label className="block text-gray-600">Select Service</label>
              <select className="w-full p-2 border rounded-lg">
                <option>General Dentistry</option>
                <option>Teeth Whitening</option>
                <option>Root Canal</option>
              </select>
            </div>
  
            <div>
              <label className="block text-gray-600">Preferred Date</label>
              <input type="date" className="w-full p-2 border rounded-lg" />
            </div>
  
            <button className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
              Submit Appointment
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default AppointmentPage ;
  