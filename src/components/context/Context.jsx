import React, { useContext, useState } from "react";
import { menuItems } from "../../assets/AppsData";
const AppContext = React.createContext();
const MenuContext = React.createContext();
const ExportContext = React.createContext();

const AppProvider = ({children}) => {
    const [menuname,setMenuName] = useState(true);
    const [menuItem,setMenuItem] = useState(menuItems);
    const [exportItem,setExportItem] = useState({
        state: false,
        item: '',
    });
    return(
        <AppContext.Provider value={[menuname,setMenuName]}>
            <MenuContext.Provider value={menuItem}>
               <ExportContext.Provider value={[exportItem,setExportItem]}>
               {children}
               </ExportContext.Provider>
            </MenuContext.Provider>
        </AppContext.Provider>
    );
}
const useMenuContext = () =>{
    return useContext(AppContext);
}
const useMenuItemContext = () =>{
    return useContext(MenuContext);
}
const useExportItemContext = () =>{
    return useContext(ExportContext);
}

export {AppContext, AppProvider, useMenuContext, useMenuItemContext, useExportItemContext}