import './index.css'
import App from './App.jsx'
import { Theme } from "@radix-ui/themes";
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Theme>
      <App />
    </Theme>
  </BrowserRouter>

)
