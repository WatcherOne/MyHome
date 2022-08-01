import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Navigate, Route } from 'react-router-dom'
import { LoadingPage } from './components/LoadingPage'
import './App.scss'

const Login = lazy(() => import('@/pages/login'))
const BottomNav = lazy(() => import('@/pages/BottomNav'))
const Index = lazy(() => import('@/pages/Index/index'))
const TypeManage = lazy(() => import('@/pages/TypeManage'))
const TypeSort = lazy(() => import('@/pages/TypeSort'))

export default function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={LoadingPage()}>
                <Routes>
                    <Route element={<BottomNav />}>
                        <Route path="/" element={<Navigate to="/index" replace />}></Route>
                        <Route path='/index' element={<Index />}></Route>
                        <Route path='/login' element={<LoadingPage />}></Route>
                    </Route>
                    <Route path='/typeList' element={<TypeManage />}></Route>
                    <Route path='/typeSort/:type' element={<TypeSort />}></Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}
