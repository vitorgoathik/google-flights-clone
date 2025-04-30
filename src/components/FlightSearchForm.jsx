import { useState } from 'react';

const FlightSearchForm = () => {
  const [form, setForm] = useState({
    from: '',
    to: '',
    date: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: trigger API call here
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Search Flights</h2>
      <div className="grid gap-4 md:grid-cols-3">
        <input name="from" placeholder="From" onChange={handleChange} className="p-2 border rounded" />
        <input name="to" placeholder="To" onChange={handleChange} className="p-2 border rounded" />
        <input name="date" type="date" onChange={handleChange} className="p-2 border rounded" />
      </div>
      <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Search
      </button>
    </form>
  );
};

export default FlightSearchForm;