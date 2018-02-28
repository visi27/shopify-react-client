import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Client, {Config} from 'shopify-buy';
import './style/app.css';

const config = new Config({
  storefrontAccessToken: '96d933d60972e93a4e0b6dad726f2ecd',
  domain: 'slackon.myshopify.com',
});

export const client = new Client(config);

ReactDOM.render(
  <App client={client}/>,
  document.getElementById('root')
);
