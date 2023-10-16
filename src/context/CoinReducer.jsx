const CoinReducer = (state, action)=>{
    switch(action.type){

        case "SEARCH_COINS":
      return {
        ...state,
        coins: action.payload,
      };


        case "COIN_DETAILS":
            return{
                ...state,
                coinData: action.payload,
            };
            

        case"COIN_CHART":
            return{
                ...state,
                coinChart: action.payload,
            }
            default:
                return state;
    }
};

export default CoinReducer;