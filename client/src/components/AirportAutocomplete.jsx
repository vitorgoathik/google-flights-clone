import { useState, useEffect } from 'react';

const AirportAutocomplete = ({ label, onSelect }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    if (!query || query.length < 3) {
      setResults([]);
      return;
    }
  
    if (timeoutId) clearTimeout(timeoutId);
  
    const id = setTimeout(async () => {
      try {
        const res = await fetch(`http://localhost:4000/api/search-airport?query=${encodeURIComponent(query)}`);
        const json = await res.json();
  
        if (json.status && Array.isArray(json.data)) {
          setResults(json.data);
        } else {
          setResults([]);
          console.warn('Unexpected searchAirport response:', json);
        }
      } catch (err) {
        console.error('Autocomplete API error:', err);
        setResults([]);
      }
    }, 400);
  
    setTimeoutId(id);
  }, [query]);

  return (
    <div>
      <label className="block mb-1 font-medium">{label}</label>
      <input
        type="text"
        className="p-2 border rounded w-full"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type city or airport"
      />
      {results.length > 0 && (
        <ul className="border rounded bg-white mt-1 max-h-48 overflow-y-auto">
          {results.map((airport) => (
            <li
              key={airport.entityId}
              className="p-2 hover:bg-blue-50 cursor-pointer"
              onClick={() => {
                setQuery(`${airport.navigation.localizedName} (${airport.skyId})`);
                setResults([]);
                onSelect(airport);
              }}
            >
              {airport.navigation.localizedName} ({airport.skyId})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AirportAutocomplete;
