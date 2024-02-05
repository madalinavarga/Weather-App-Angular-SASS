export interface WeatherData {
    coord: { lon: number; lat: number };
    weather: { id: number; main: string; description: string; icon: string }[];
    base: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    visibility: number;
    wind: { speed: number; deg: number };
    clouds: { all: number };
    dt: number;
    sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

export const exampleData: WeatherData = {
    coord: { lon: 10, lat: 53.55 },
    weather: [
        { id: 804, main: "Clouds", description: "overcast clouds", icon: "04n" },
    ],
    base: "stations",
    main: {
        temp: 283.9,
        feels_like: 280.95,
        temp_min: 283.6,
        temp_max: 284.07,
        pressure: 1004,
        humidity: 84,
    },
    visibility: 10000,
    wind: { speed: 2.57, deg: 10 },
    clouds: { all: 100 },
    dt: 1704381631,
    sys: {
        type: 1,
        id: 1263,
        country: "DE",
        sunrise: 1704353746,
        sunset: 1704381188,
    },
    timezone: 3600,
    id: 2911298,
    name: "Hamburg",
    cod: 200,
};
