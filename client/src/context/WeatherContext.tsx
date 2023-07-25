import * as React from 'react';




const val: {
    f: boolean;
    setF: () => void;
} = {
    f : false,
    setF : () => {},
}
export const WeatherContext = React.createContext(val)

type childrenType = {
    children?: React.ReactElement | undefined
}

const Context: React.FunctionComponent<React.ReactNode> = ({ children} : childrenType & React.Dispatch<React.SetStateAction<boolean>>) :React.ReactElement=> {
    const [f, setF] = React.useState(false)
  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <WeatherContext.Provider value={WeatherContext}>
        {children}
    </WeatherContext.Provider>
  );
};

export default Context;
