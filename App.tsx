import { View, Text } from 'react-native'
import React from 'react'
import Routes from './src/screens/routes/Routes'
import { Provider } from 'react-redux'
import { myStore } from './src/redux/Store'
import ProductList from './src/screens/ProductList'

// const shoes = [{
//   name: 'Puma',
//   price: 7000,
//   size: 10,
//   qty: 0,
//   image: 'https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc='
// }, {
//   name: 'Nike',
//   price: 10000,
//   size: 9,
//   qty: 0,
//   image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
// }, {
//   name: 'Adidas',
//   price: 8000,
//   size: 7,
//   qty: 0,
//   image: 'https://www.jiomart.com/images/product/original/rvrgwpjvsp/bruton-trendy-sports-shoes-for-men-blue-product-images-rvrgwpjvsp-0-202209021256.jpg?im=Resize=(1000,1000)'
// }, {
//   name: 'Sparx',
//   price: 5000,
//   size: 8,
//   qty: 0,
//   image: 'https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg'
// }, {
//   name: 'Puma',
//   price: 7000,
//   size: 10,
//   qty: 0,
//   image: 'https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc='
// }, {
//   name: 'Nike',
//   price: 10000,
//   size: 9,
//   qty: 0,
//   image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
// }, {
//   name: 'Adidas',
//   price: 8000,
//   size: 7,
//   qty: 0,
//   image: 'https://www.jiomart.com/images/product/original/rvrgwpjvsp/bruton-trendy-sports-shoes-for-men-blue-product-images-rvrgwpjvsp-0-202209021256.jpg?im=Resize=(1000,1000)'
// }, {
//   name: 'Sparx',
//   price: 5000,
//   size: 8,
//   qty: 0,
//   image: 'https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg'
// },

export default function App() {
  return (
    <Provider store={myStore}>
      <Routes />
    </Provider>

  )
}