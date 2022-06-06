import * as bin from "./index";
import axios from "axios";
import React from "react";
import styles from './utils.module.css';

const btc = 'https://data.messari.io/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd'
const eth = "https://data.messari.io/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd"

export const start = async (args) => {
  const commands = Object.keys(bin).sort().join("\n");

  return `Available commands:\n${commands}\n\n[ctrl+c] clear terminal.`;
};

export const about = async (args) => {
  return (
    <>
    <p className={styles.age}>Age: <span className={styles.ageAns}>29</span></p>
    <p className={styles.eyes}>Eyes: <span className={styles.eyeAns}>Brown</span></p>
    <p className={styles.vices}>Vices: <span className={styles.viceAns}>Swiss chocolate, NFT shopping, too much leverage</span></p>
    <p className={styles.bio1}>Bio: <span className={styles.bioAns1}>I am a product manager, front end programmer, and crypto native</span></p>
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

export const wallet = async () => {
  window.open('https://entrophy11.vercel.app/')
  /* return (
    <>
    <p className={styles.projects}>Solana browser wallet — <a target='_blank' href='https://entrophy11.vercel.app/'><span className={styles.projDesc}>An in browser Solana wallet with other protocols in development</span></a></p>
    </>
  ) */
  return `Opening crypto wallet...`
}

export const help = async () => {
  return (
    <>
    <div>
    <p>All commands:</p>
    <div>
    <ul>about — <span className={styles.desc}>About me in a nutshell</span></ul>
    <ul>bartender — <span className={styles.desc}>What can I get ya, mate?</span></ul>
    <ul>bitcoin_price — <span className={styles.desc}>The current price of one Bitcoin in USD. Have we hit 100k yet??</span></ul>
    <ul>cv — <span className={styles.desc}>View my resume/cv and hit me up with only your finest offers</span></ul>
    <ul>date — <span className={styles.desc}>Get the current date</span></ul>
    <ul>email — <span className={styles.desc}>My contact details. Bring it on, I LOVE spam</span></ul>
    <ul>eth_price — <span className={styles.desc}>The current price of one Ether in USD</span></ul>
    <ul>help — <span className={styles.desc}>A more detailed description of the commands</span></ul>
    <ul>markets — <span className={styles.desc}>The current state of the global crypto market. HODLLLL</span></ul>
    <ul>news — <span className={styles.desc}>What's going on in the cryptosphere. Has bitcoin died again for the 87th time?</span></ul>
    <ul>wallet — <span className={styles.desc}>A web3 wallet for Solana, with other protocols on the way</span></ul>
    <ul>start — <span className={styles.desc}>A list of all commands</span></ul>
    <ul>trending_coins — <span className={styles.desc}>The hottest coins in the last 7 days</span></ul>
    <ul>website — <span className={styles.desc}>How I built this website</span></ul>
    </div>
    </div>
    </>
  )
}

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
  window.open('https://mackenziecameron.com/assets/pdfs/Resume2022.pdf', '_blank');

  return 'Opening cv/resume ...'
}

 export const bitcoin_price = async () => {
  const price = await axios.get(
    btc
  );
  const priceUSD = price.data.data[0].metrics.market_data.price_usd.toFixed(2);

  return (`One Bitcoin is currently worth $${priceUSD} USD`);
}; 


export const eth_price = async () => {
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
      <p key={news.title} className={styles.title}>{news.title} — <a target='_blank' href={news.url}><span className={styles.url}>{news.url}</span></a></p>
     
    ))}
    </>
  )
}

export const markets = async () => {
  const res = await axios.get('https://api.coingecko.com/api/v3/global');

  const stats = res.data.data

  return (<>
  
    <p>Getting market data over the last 24 hours...</p>
    <p>Percentage change: <span className={styles.stats}>{stats.market_cap_change_percentage_24h_usd.toFixed(2)}%</span></p>
    <p>Bitcoin dominance: <span className={styles.stats}>{stats.market_cap_percentage.btc.toFixed(2)}%</span></p>
    { <p>Ethereum dominance: <span className={styles.stats}>{stats.market_cap_percentage.eth.toFixed(2)}%</span></p> }
    { <p>Total crypto marketcap: <span className={styles.stats}>${stats.total_market_cap.usd.toLocaleString('en')}</span></p> }
    </>
  )
}

export const trending_coins = async () => {
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

export const website = async(args) => {
  window.open('https://github.com/maccamer11/terminal')

  return "Accessing github website repo..."
}

export const email = async (args) => {
  window.open("mailto:mackenziecameron2193@gmail.com");

  return "Opening mailto:mackenziecameron2193@gmail...";
};

/* export const easterEgg = async () => {
  return (
    <>
    <p>What is the answer?</p>
    <input ref={inputRef}
        id="prompt"
        type="text"
        className={styles.input}
        value={command}
        onChange={onChange}
        autoFocus
        onKeyDown={onSubmit}
        autoComplete="off"/>
    </>
  )
} */

