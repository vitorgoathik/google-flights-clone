import { useState } from 'react';
import AirportAutocomplete from './AirportAutocomplete';

const FlightSearchForm = () => {
  const [originAirport, setOriginAirport] = useState(null);
  const [destinationAirport, setDestinationAirport] = useState(null);
  const [date, setDate] = useState('');
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!originAirport?.entityId || !destinationAirport?.entityId || !date) {
      alert('Please select valid origin, destination, and date.');
      return;
    }

    setFlights([]);
    setError(null);
    setLoading(true);

    const url = `https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchFlights?originEntityId=${originAirport.entityId}&originSkyId=${originAirport.slyId}&destinationEntityId=${destinationAirport.entityId}&date=${date}`;

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
        'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com',
      },
    };

    try {
      const res = await fetch(url, options);
      const data = await res.json();

      if (data.flights && data.flights.length > 0) {
        setFlights(data.flights.slice(0, 5));
      } else {
        setError('No flights found for this route.');
      }
    } catch (err) {
      console.error('Flight search error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-2xl font-semibold mb-2">Search Flights</h2>

        <AirportAutocomplete label="From" onSelect={setOriginAirport} />
        <AirportAutocomplete label="To" onSelect={setDestinationAirport} />

        <div>
          <label className="block mb-1 font-medium">Date</label>
          <input
            type="date"
            className="p-2 border rounded w-full"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          {loading ? 'Searching...' : 'Search Flights'}
        </button>
      </form>

      {error && <p className="text-red-600 mt-4">{error}</p>}

      {flights.length > 0 && (
        <div className="mt-6 space-y-4">
          <h3 className="text-lg font-semibold">Results</h3>
          {flights.map((flight, idx) => (
            <>
              card...
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default FlightSearchForm;
