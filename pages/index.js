import { FormControl, InputAdornment, InputLabel, OutlinedInput } from "@mui/material"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useEffect, useState } from "react"
import styled from 'styled-components'
import DataList from "../components/homedata";
import Facture from "../components/facture";

import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export async function getServerSideProps() {
  
  const products = await prisma.product.findMany()

  return {
    props: {initialProducts: products}, // will be passed to the page component as props
  }
}

const Main = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns : 2fr 1fr;
  gap: 10px;
`

const List = styled.div`
  padding: 20px 10px 20px 0px;
`


export default function Home({initialProducts}) {

  const [products, setProducts] = useState(initialProducts)
  const [cart, setCart] = useState([])
  const [cartItems, setCartItems] = useState([])
  
  const getTotalPrice = (items) =>
    items.reduce((total, item)=> total + (item.amount * item.price), 0)

  const addToCart = (product) => {
    setCartItems(prev =>{
      
      // is item in the cart?
      const isInCart = prev.find(item => item.id === product.id)

      if(isInCart){
        return prev.map(item=>(
          item.id === product.id ? {...product, amount: item.amount+1} : item
        ))
      }
      // First time item is added
      return [...prev, {...product, amount: 1}]
    })
    
  }

  // Remove Items from cart
  const removeFromCart = (id)=>{
    setCartItems(prev => 
      prev.reduce((cart, item)=>{
        if(item.id == id){
          if(item.amount === 1) return cart;
          return [...cart, {...item, amount: item.amount - 1}]
        }else{
          return [...cart, item]
        }
      },[]));
  }


  const handleBarcodeSearch = (data) => {
    if (data.charCode === 13) {
      alert('Barcode is: ' + " " + data.target.value )
      const id = parseInt(data.target.value)
      products.find(item =>{
        if(item.id === id ){
          addToCart(item)
        }
      })
   } 
  }

  const saveInvoice = async (cartItems) => {
    const response = await fetch('./api/invoice', {
      method: 'POST',
      body: JSON.stringify(cartItems)
    })

    // if(!response.ok){
    //   throw new Error (response.statusText)
    // }

    return await response.json()
  }

  return (
    <Main>
      <List>
      <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-search">Article</InputLabel>
          <OutlinedInput
            id="outlined-adornment-search"
            endAdornment={<InputAdornment position="end"><SearchOutlinedIcon /></InputAdornment>}
            label="Article"
          />
        </FormControl>

        <DataList products={products} addToCart={addToCart} />
      </List>
      <Facture 
        cartItems={cartItems} 
        addToCart={addToCart} 
        removeFromCart={removeFromCart} 
        totalPrice = {getTotalPrice}
        handleBarcodeSearch={handleBarcodeSearch}
        saveInvoice = {saveInvoice}
      />
      
    </Main>
  )
}


