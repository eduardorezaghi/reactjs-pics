import ReactDOM from 'react-dom/client';
import App from './App';
import { getImages } from './api';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(<App />)