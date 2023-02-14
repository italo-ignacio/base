import { createContext, useContext, useState } from 'react';
import type { Dispatch, FC, ReactNode, SetStateAction } from 'react';

interface SidebarProviderProps {
  children: ReactNode;
}

interface SidebarContextData {
  setBurgerMenuHasClicked: Dispatch<SetStateAction<boolean>>;
  burgerMenuHasClicked: boolean;
}

const SidebarContext = createContext<SidebarContextData | null>(null);

export const SidebarProvider: FC<SidebarProviderProps> = ({ children }: SidebarProviderProps) => {
  const [burgerMenuHasClicked, setBurgerMenuHasClicked] = useState<boolean>(false);

  return (
    <SidebarContext.Provider value={{ burgerMenuHasClicked, setBurgerMenuHasClicked }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useBurgerMenu = (): {
  burgerMenuHasClicked: boolean;
  setBurgerMenuHasClicked: Dispatch<SetStateAction<boolean>>;
} => {
  const { burgerMenuHasClicked, setBurgerMenuHasClicked } = useContext(
    SidebarContext
  ) as SidebarContextData;

  return { burgerMenuHasClicked, setBurgerMenuHasClicked };
};
