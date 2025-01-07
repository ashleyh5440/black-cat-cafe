import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRef } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, useLocation, useOutlet } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.css';

import './index.css'

//pages: home, about, menu, book clubs, reserve space

import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import BookClubs from './pages/Book-Clubs';
import Reserve from './pages/Reserve';

import Navigation from './components/Navigation'

const routes = [
  {
    path: '/',
    name: 'Home',
    element: <Home />,
    nodeRef: createRef()
  },
  {
    path: '/about',
    name: 'About',
    element: <About />,
    nodeRef: createRef()
  },
  {
    path: '/menu',
    name: 'Menu',
    element: <Menu />,
    nodeRef: createRef()
  },
  {
    path: '/book-clubs',
    name: 'Book Clubs',
    element: <BookClubs />,
    nodeRef: createRef()
  },
  {
    path: '/reserve-space',
    name: 'Reserve Space',
    element: <Reserve />,
    nodeRef: createRef()
  },
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element,
    })),
  },
])

function App() {
  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } = routes.find((route) => route.path === location.pathname) ?? {}
  return (
    <>
    <Navigation routes={routes} />
    <main className="application">
      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          nodeRef={nodeRef}
          timeout={300}
          classNames="page"
          unmountOnExit>
            {(state) => (
              <div ref={nodeRef} className="page">
                {currentOutlet}
              </div>
            )}
        </CSSTransition>
      </SwitchTransition>
    </main>
    {/* <Footer /> */}
    </>
  )
}

const application = document.getElementById('root')
const root = createRoot(application)
root.render(<RouterProvider router={router} />)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
