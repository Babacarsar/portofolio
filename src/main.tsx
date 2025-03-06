
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Initialize the root element
const root = createRoot(document.getElementById("root")!);

// Render the app
root.render(<App />);

// Track page views when routes change (for debugging)
if (typeof window !== 'undefined') {
  console.log('Google Analytics tracking is configured. Remember to replace G-YOUR-MEASUREMENT-ID with your actual measurement ID.');
}
