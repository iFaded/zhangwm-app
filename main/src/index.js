import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { registerMicroApps, start,setDefaultMountApp } from "qiankun";
import reportWebVitals from './reportWebVitals';

registerMicroApps([
  {
    name: 'reactApp',
    entry: '//localhost:9001',
    container: '#container',
    activeRule: '/app-react',
  },
  {
    name: 'vue2App',
    entry: '//localhost:9002',
    container: '#container',
    activeRule: '/app-vue2',
  }
]);
// 启动 qiankun
start();
setDefaultMountApp('./app-vue2')
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
