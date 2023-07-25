import { DateObjectUnits, DateTime } from "luxon";

const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
const WEATHER_API_KEY = "d3c74176875972ce4f7b5ab7e98283bb";

export type IWeatherType = {
  coord: { lat: number; lon: number };
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  dt: number;
  visibility: number;
  clouds: { all: number };
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: DateObjectUnits;
  weather: [{ main: string; icon: string; description: string }];
  name: string;
  wind: { speed: number };
};
export type IForecastWeatherType = {
  list: [
    {
      dt: number;
      main: {
        temp_min: number;
        temp_max: number;
      };
      weather: [
        {
          icon: string;
        }
      ];
    }
  ];
};

export const fetchWeatherData = async (
  city: string,
  units: string
): Promise<IWeatherType> => {
  const url = `${WEATHER_API_URL}/weather?q=${city}&appid=${WEATHER_API_KEY}&units=${units}`;
  const response = await fetch(url);
  return (await response.json()) as IWeatherType;
};

// get user geo lat & lon when location is clicked
export const location = async (lat: number, lon: number) => {
  const currentWeatherFetch = await fetch(
    `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
  );
  const dta = (await currentWeatherFetch.json()) as IWeatherType;
  return dta;
};

const formattedCurrentWeather = async (city: string, units: string) => {
  const data = await fetchWeatherData(city, units);
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    dt,
    visibility,
    sys: { country, sunrise, sunset },
    timezone,
    weather,
    name,
    clouds: { all },
    wind: { speed },
  } = data;

  const { main: details, icon, description } = weather[0];

  return {
    time: formatToLocalTime(dt, timezone, "ccc"),
    visibility,
    all,
    name,
    country,
    description,
    dt,
    timezone,
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    sunrise,
    sunset,
    speed,
    details,
    icon,
  };
};

export const forecastWeather = async (city: string) => {
  const { lat, lon } = await formattedCurrentWeather(city, "metric");
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;

  const response = await fetch(url);
  const data = (await response.json()) as IForecastWeatherType;
  return data;
};

//middleware
export const formatToLocalTime = (
  secs: number,
  Zone: DateObjectUnits,
  format = "ccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).set(Zone).toFormat(format);

export const iconUrlFromeCode = (code: string) =>
  `http://openweathermap.org/img/wn/${code}@4x.png`;

export default formattedCurrentWeather;
