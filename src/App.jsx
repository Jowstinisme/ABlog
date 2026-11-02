import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import IndividualBlogPost from './components/blog/IndividualBlogPost'
import { Routes, Route } from 'react-router'
import CommonLayout from './layouts/CommonLayout'
import ContactPage from './components/blog/ContactPage'
import PostList from './components/postList/PostList'
import Homepage from './components/blog/Homepage'

function App() {
  const [count, setCount] = useState(0)



  return (
    <div>
      <Routes>
        <Route element={<CommonLayout />}>
          {<Route path="/" element={<Homepage />} />}
          {<Route path="/contact" element={<ContactPage />} />}
          <Route path="/posts" element={<PostList />} />
          <Route path="/posts/:post_id" element={<IndividualBlogPost />} />
        </Route>
      </Routes>
      {/* <IndividualBlogPost /> */}
    </div>
  )
}

export default App
