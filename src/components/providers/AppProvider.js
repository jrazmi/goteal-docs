import { useEffect, useState, createContext, useContext } from 'react';


const AppContext = createContext();

const AppProvider = (props) => {
    const [theme, setTheme] = useState('light');
    const [appMounted, setAppMounted] = useState(false);

    const setMode = mode => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
      };

      const toggleTheme = () => {
        console.log("clicked");
      if (theme === 'light') {
        setMode('dark')
      } else {
        setMode('light')
      }
    };
    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localTheme ?
          setMode('dark') :
          localTheme ?
            setTheme(localTheme) :
            setMode('light');
        setAppMounted(true);
      }, []);


    return (
        <AppContext.Provider value={{theme, toggleTheme, appMounted}} {...props} />
    )
}

const useApp = () => useContext(AppContext);

export { AppContext, AppProvider, useApp };