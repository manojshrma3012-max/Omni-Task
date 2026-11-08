
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

export const serviceurl = "http://localhost:4000"

createRoot(document.getElementById("root")!).render(
    <GoogleOAuthProvider clientId='684712621226-h7r0aont55jt450t3luadav7o5be23gg.apps.googleusercontent.com'>
      <App />
    </GoogleOAuthProvider>
);