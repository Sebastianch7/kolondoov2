import React from 'react'
import Header from '../Components/Header/Header'
import ContenedorBlogItem from '../Components/Contenedor/ContenedorBlogItem'
import Footer from '../Components/Footer/Footer'
export default function BlogItem() {
  return (
    <>
      <Header breadCrumb></Header>
      <ContenedorBlogItem />
      <Footer></Footer>
    </>
  )
}
