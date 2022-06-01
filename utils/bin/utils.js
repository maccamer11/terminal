import * as bin from "./index";
import packageJson from "../../package.json";
import axios from "axios";
import React from "react";
import styles from './utils.module.css';
import {Text} from '@chakra-ui/react';

export const help = async (args) => {
  const commands = Object.keys(bin).sort().join("\n");

  return `Available commands:\n${commands}\n\n[ctrl+c] clear terminal.`;
};

export const about = async (args) => {
  return (
    <>
    <p className={styles.age}>Age: <span className={styles.ageAns}>28</span></p>
    <p className={styles.eyes}>Eyes: <span className={styles.eyeAns}>Brown</span></p>
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

export const clear = async (args) => {
  return new Date().toString();
};

 export const bartender = async (args) => {
   const res = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
   const drink = res.data.drinks[0]
   console.log(drink)
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

/* export const easterEgg = async (args) => {
  return (
    <>
    <p>What is the answer?</p>
    </>
  )
} */

export const cv = async (args) => {
  window.open('https://mackenziecameron.com/Resume.pdf', '_blank');

  return 'Opening cv/resume ...'
}

export const bitcoinPrice = async () => {
  const price = await axios.get(
    "https://data.messari.io/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd"
  );
  const priceUSD = price.data.data[0].metrics.market_data.price_usd.toFixed(2);

  return (`One Bitcoin is currently worth $${priceUSD} USD`);
};

export const ethereumPrice = async () => {
  const price = await axios.get(
    "https://data.messari.io/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd"
  );
  const priceUSD = price.data.data[1].metrics.market_data.price_usd.toFixed(2);

  return `One Ether is currently worth $${priceUSD} USD`;
};



export const email = async (args) => {
  window.open("mailto:maccameron47@gmail.com");

  return "Opening mailto:maccameron47@gmail.com...";
};

