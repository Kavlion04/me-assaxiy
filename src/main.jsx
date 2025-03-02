import './index.css'
import App from './App.jsx'
import { Theme } from "@radix-ui/themes";
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import Provider from './pages/About/AboutFavorite.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider>
      <Theme>
        <App />
      </Theme>
    </Provider>
  </BrowserRouter>

)
