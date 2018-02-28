import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Config } from 'shopify-buy'
import Client from 'shopify-buy'

it('renders without crashing', () => {
  const config = new Config({
    storefrontAccessToken: '96d933d60972e93a4e0b6dad726f2ecd',
    domain: 'slackon.myshopify.com',
  });

  const client = new Client(config);

  const div = document.createElement('div');
  ReactDOM.render(<App client={client}/>, div);
});
