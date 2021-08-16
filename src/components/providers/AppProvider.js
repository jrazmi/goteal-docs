import { useEffect, useState, createContext, useContext } from 'react';


const AppContext = createContext();

const AppProvider = (props) => {
    const [theme, setTheme] = useState('light');
    const [appMounted, setAppMounted] = useState(false);
    const [drawer, setDrawer] = useState('open');

    const setDrawerMode = mode => {
      window.localStorage.setItem('drawer', mode);
      setDrawer(mode);
    }

    const toggleDrawer = () => {
      if(drawer === 'open'){
        setDrawerMode('closed');
      } else {
        setDrawerMode('open');
      }
    }

    const setMode = mode => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    };

    const toggleTheme = () => {
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
        
        const localDrawer = window.localStorage.getItem('drawer');
        localDrawer ? setDrawerMode(localDrawer) : setDrawerMode('open');
        setAppMounted(true);
      }, []);


    return (
        <AppContext.Provider value={{theme, toggleTheme, appMounted, drawer, toggleDrawer}} {...props} />
    )
}

const useApp = () => useContext(AppContext);

export { AppContext, AppProvider, useApp };