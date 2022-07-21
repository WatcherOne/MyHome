import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Index = lazy(() => import('./pages/index'))
const Login = lazy(() => import('./pages/login'))
// import router from './router'
// @media (prefers-reduced-motion: no-preference)

export default function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' component={<Index/ >}></Route>
                    <Route path='/login' component={<Login/ >}></Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}
