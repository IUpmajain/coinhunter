export const SearchCoin = async (coinName) => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/search?query=${coinName}`
      );
      const data = await response.json();
      return data.coins;
    } catch (error) {
      console.log(error);
    }
  };
  
  
  export const getCoinDetails = async (coinid) => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coinid}`
        );
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    };
  
  
  export const getChartDetails = async(coinid, day)=>{
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinid}/market_chart?vs_currency=USD&days=${day}`);
      const data = await response.json();
      console.log(data);
      return data.prices;
    } catch (error) {
      console.log(error);
    }
  } 