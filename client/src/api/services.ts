/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
export const url =
  "https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=";
export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "da71a10a2cmsh658945aaf214fb8p1bc6c8jsn05cde877a6e2",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "d3c74176875972ce4f7b5ab7e98283bb";

interface Data {
  coord: { lat: number; lon: number };
}

const fetchWeatherData = async (city: string) => {
  const url = `${WEATHER_API_URL}/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`;
  const response = await fetch(url);
  const data: {
    coord: { lat: number; lon: number };
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      humidity: number;
    };
    dt: number;
    sys: { country: string; sunrise: number; sunset: number };
    weather: [{ main: string; icon: string }];
    wind: { speed: number };
  } = await response.json();
  return data;
};

//looking/searching for the cities  base on the inputValue
export const getCityInfo = async (inputValue: string) => {
  try {
    const response = await fetch(`${url}${inputValue}`, options);
    const result: unknown = await response.json();
  } catch (error) {
    console.error(error);
  }
};

const formattedCurrentWeather = async (city: string) => {
  const info = getCityInfo(city);

  const data = await fetchWeatherData(city);
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    country,
    sunrise,
    sunset,
    speed,
    details,
    icon,
  };
};

export { formattedCurrentWeather };
