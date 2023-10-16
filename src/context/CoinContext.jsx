import { createContext, useReducer} from "react";
import CoinReducer from "./CoinReducer";


const CoinContext = createContext();

export const CoinProvider = ({children})=>{
    
  const initialState = {
    coins: [],
    coinData: null,
    coinChart:null,
  };

  const [state, dispatch] = useReducer(CoinReducer, initialState);

  return (
    <CoinContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CoinContext.Provider>
  );
};
export default CoinContext;