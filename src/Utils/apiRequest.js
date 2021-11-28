import axios from "axios";
//Function to get the global stats
export async function getGlobalStats(setStats) {
  const options = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/stats",
    headers: {
      "x-rapidapi-host": "coinranking1.p.rapidapi.com",
      "x-rapidapi-key": "d70075ef62mshb5e070ebeaaefa1p1e7901jsn2948bcdafec2",
    },
  };
  const response = await axios.request(options);
  if (response) {
    const statsData = response.data.data;
    const arr = [];
    for (const key in statsData) {
      arr.push({
        name: key,
        val: statsData[key],
      });
    }
    
    setStats(arr);
  } else {
    console.log("Error Occurred");
  }
}
//Function to get Crypto Stats
export async function getCryptoStats(setCryptoStats,num) {
  var options = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/coins",
    headers: {
      "x-rapidapi-host": "coinranking1.p.rapidapi.com",
      "x-rapidapi-key": "d70075ef62mshb5e070ebeaaefa1p1e7901jsn2948bcdafec2",
    },
  };
  
  const response = await axios.request(options);
  if (response) {
    const statsData = response.data.data.coins;
    // console.log(response.data.data.coins);
    const arr = [];
    statsData.forEach(object => {
        arr.push({
            name:object.name,
            price:object.price,
            change:object.change,
            marketcap:object.marketCap,
            image:object.iconUrl
        })
    });

    const newArr=arr.slice(1,num);
    setCryptoStats(newArr);
  } else {
    console.log("Error Occurred");
  }
}

//Function to get Crypto Exchanges
export async function getCryptoExchanges(setCryptoExchanges,num) {
  var options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/exchanges',
    headers: {
      'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': 'd70075ef62mshb5e070ebeaaefa1p1e7901jsn2948bcdafec2'
    }
  };
  const response = await axios.request(options);
  if (response) {
    const exchangesData = response.data.data.exchanges;
    // console.log(response.data.data.exchanges);
    const arr = [];
    exchangesData.forEach(object => {
        arr.push({
            name:object.name,
            market:object.numberOfMarkets,
            rank:object.rank,
            image:object.iconUrl,
            marketShare:object.marketShare
        })
    });
    // console.log(arr);
    setCryptoExchanges(arr);
  } else {
    console.log("Error Occurred");
  }
}

//Function to get Crypto News
export async function getCryptoNews(setCryptoNews,num) {
  var options = {
    method: 'GET',
    url: 'https://free-news.p.rapidapi.com/v1/search',
    params: {q: 'Cryptocurrency', lang: 'en'},
    headers: {
      'x-rapidapi-host': 'free-news.p.rapidapi.com',
      'x-rapidapi-key': 'd70075ef62mshb5e070ebeaaefa1p1e7901jsn2948bcdafec2'
    }
  };
  const response = await axios.request(options);
  if (response) {
    const exchangesData = response.data.articles;
    // console.log(response.data.articles);
    const arr = [];
    exchangesData.forEach(object => {
        arr.push({
            title:object.title,
            author:object.author,
            summary:object.summary,
        })
    });
    const newArr=arr.slice(1,num);
    console.log(newArr);
    setCryptoNews(newArr);
    
  } else {
    console.log("Error Occurred");
  }
}