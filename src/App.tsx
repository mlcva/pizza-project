import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

// components
import Home from './pages/Home'

import './scss/app.scss'
import MainLayout from './layouts/MainLayout'

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ './pages/Cart'))
const NotFound = React.lazy(() => import('./pages/NotFound'))
const FullPizza = React.lazy(() => import('./pages/FullPizza'))

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Загрузка...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="pizza/:id"
          element={
            <Suspense fallback={<div>Загрузка...</div>}>
              <FullPizza />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Загрузка...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}

export default App
