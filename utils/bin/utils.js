import * as bin from "./index";
import packageJson from "../../package.json";
import axios from "axios";
import React from "react";
import styles from './utils.module.css';
import Link from 'next/link';

const btc = 'https://data.messari.io/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd'
const eth = "https://data.messari.io/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd"

export const help = async (args) => {
  const commands = Object.keys(bin).sort().join("\n");

  return `Available commands:\n${commands}\n\n[ctrl+c] clear terminal.`;
};

export const about = async (args) => {
  return (
    <>
    <p className={styles.age}>Age: <span className={styles.ageAns}>29</span></p>
    <p className={styles.eyes}>Eyes: <span className={styles.eyeAns}>Brown</span></p>
    <p className={styles.vices}>Vices: <span className={styles.viceAns}>Swiss chocolate, NFT shopping, too much leverage</span></p>
    <p className={styles.bio1}>Bio: <span className={styles.bioAns1}>I am a product manager, front end programmer, and crypto aficiondao</span></p>
  <p className={styles.bio2}>who has been shipping products in the space for the past few years. Above</p>
  <p className={styles.bio3}>all, I am interested in the technologies that are set to change our economic</p>
  <p className={styles.bio4}>and political landscapes forever.</p>
  <br />
  <p className={styles.bioQuote}> “Non est ad astra mollis e terris via”</p>
  <br />
    </>
  )

};

export const date = async (args) => {
  return new Date().toString();
};

 export const bartender = async (args) => {
   const res = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
   const drink = res.data.drinks[0]
return (
  <>
  <p>One <span className={styles.drink}>{drink.strDrink}</span> coming right up!</p>
  <p>Type: {drink.strAlcoholic} </p>
  <p>Ingredients: <span><li>{drink.strIngredient1}</li>
  <li>{drink.strIngredient2}</li>
  {drink.strIngredient3 == null ? null : <li>{drink.strIngredient3}</li>}
  {drink.strIngredient4 == null ? null : <li>{drink.strIngredient4}</li>}
  {drink.strIngredient5 == null ? null : <li>{drink.strIngredient5}</li>}
  {drink.strIngredient6 == null ? null : <li>{drink.strIngredient6}</li>}</span></p>
  
  </>
)
} 

export const cv = async (args) => {
  window.open('https://mackenziecameron.com/assets/pdfs/Resume_(3).pdf', '_blank');

  return 'Opening cv/resume ...'
}

 export const bitcoinPrice = async () => {
  const price = await axios.get(
    btc
  );
  const priceUSD = price.data.data[0].metrics.market_data.price_usd.toFixed(2);

  return (`One Bitcoin is currently worth $${priceUSD} USD`);
}; 


export const ethPrice = async () => {
  const price = await axios.get(
    eth
  );
  const priceUSD = price.data.data[1].metrics.market_data.price_usd.toFixed(2);

  return `One Ether is currently worth $${priceUSD} USD`;
};

export const news = async () => {
  const res = await axios.get('https://data.messari.io/api/v1/news')

  const news = res.data.data
  
  return (
   
    <>
    <p>Getting latest news...</p>
    {news.map((news) => (
      <p className={styles.title}>{news.title} — <a target='_blank' href={news.url}><span className={styles.url}>{news.url}</span></a></p>
     
    ))}
    </>
  )
}

export const markets = async () => {
  const res = await axios.get('https://api.coingecko.com/api/v3/global');

  const stats = res.data.data
  console.log(stats)

  return (<>
  
    <p>Getting market data over the last 24 hours...</p>
    <p>Percentage change: <span className={styles.stats}>{stats.market_cap_change_percentage_24h_usd.toFixed(2)}%</span></p>
    <p>Bitcoin dominance: <span className={styles.stats}>{stats.market_cap_percentage.btc.toFixed(2)}%</span></p>
    { <p>Ethereum dominance: <span className={styles.stats}>{stats.market_cap_percentage.eth.toFixed(2)}%</span></p> }
    { <p>Total crypto marketcap: <span className={styles.stats}>${stats.total_market_cap.usd.toLocaleString('en')}</span></p> }
    </>
  )
}

export const trendingCoins = async () => {
  const res = await axios.get('https://api.coingecko.com/api/v3/search/trending')

  const trends = res.data.coins
   return (
    <>
    <p>Getting hottest coins this week...</p>
  {trends.map((trend) => (
    <p>{trend.item.name} — <span className={styles.symbols}>{trend.item.symbol}</span></p>
  ))}
    </>
  ) 
}

export const email = async (args) => {
  window.open("mailto:maccameron47@gmail.com");

  return "Opening mailto:maccameron47@gmail.com...";
};

