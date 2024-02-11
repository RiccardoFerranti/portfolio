import {
  createContext, useContext, useMemo, useState,
} from 'react';

interface IFlipContextType {
  children: React.ReactNode | React.ReactNode[];
}

interface IFlipContextValue {
  flip: boolean;
  setFlip: React.Dispatch<React.SetStateAction<boolean>>;
}

const FlipContext = createContext<IFlipContextValue | null>(null);

export default function FlipProvider(props: IFlipContextType) {
  const { children } = props;
  const [flip, setFlip] = useState(false);

  const contextValue = useMemo(() => ({ flip, setFlip }), [flip, setFlip]);

  return (
    <FlipContext.Provider value={contextValue}>{children}</FlipContext.Provider>
  );
}

export function useFlipProvider(): any | null {
  return useContext(FlipContext);
}
