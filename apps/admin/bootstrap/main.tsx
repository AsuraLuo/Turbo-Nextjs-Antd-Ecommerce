import { createRoot } from 'react-dom/client'

import App from './App'

const rootElement: HTMLElement = document.getElementById('root') as HTMLElement

createRoot(rootElement).render(<App />)
