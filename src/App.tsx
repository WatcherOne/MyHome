import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoadingPage } from './components/LoadingPage'
import './App.scss'

const Index = lazy(() => import('./pages/Index/index'))
const Login = lazy(() => import('./pages/login'))
// import router from './router'
// @media (prefers-reduced-motion: no-preference)

export default function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={LoadingPage()}>
                <Routes>
                    <Route path='/' element={<Index/ >}></Route>
                    <Route path='/login' element={<Login/ >}></Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}
