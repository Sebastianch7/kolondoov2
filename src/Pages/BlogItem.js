import React from 'react'
import Header from '../Components/Header/Header'
import ContenedorBlogItem from '../Components/Contenedor/ContenedorBlogItem'
import ContenedorDestacados from '../Components/Blog/ContenedorDestacados'
import Footer from '../Components/Footer/Footer'
export default function BlogItem() {
  return (
    <>
      <Header></Header>
      <ContenedorBlogItem />
      <Footer></Footer>
    </>
  )
}
