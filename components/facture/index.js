import { Button, Dialog, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import {useState, forwardRef, useRef} from 'react'
import { Wrapper, CartList,CartItem, CartBtn, BarcodeInput } from './styles'
import {BiBarcodeReader} from 'react-icons/bi'
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';

const Transition =forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Facture = (props) => {

    const {
        cartItems, 
        addToCart, 
        removeFromCart, 
        totalPrice, 
        handleBarcodeSearch,
        saveInvoice
    } = props;
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    return (
        <Wrapper>
            <BarcodeInput>
                <BiBarcodeReader />
                <input
                    type="text" 
                    placeholder="Scan or Type Barcode"
                    onKeyPress={(data)=>handleBarcodeSearch(data)}/>
            </BarcodeInput>
            
            
            <CartList>
                {cartItems.map(item => (
                    <CartItem>
                        <div style={{textAlign: "center", fontWeight: "bold" }}>
                            <CartBtn onClick={()=>removeFromCart(item.id)} >-</CartBtn>
                            {item.amount}
                            <CartBtn onClick={()=>addToCart(item)}>+</CartBtn>
                        </div>
                        <div>{item.name} @ ${item.price}</div> 
                        <div>${item.amount * item.price}</div>
                    
                    </CartItem> 
                ))}
            </CartList>
            <div style={{display: "flex", gap: "10px", marginTop: "15px"}}>
                <Button 
                    variant="contained" 
                    color="secondary"
                    onClick={()=>saveInvoice(cartItems)}
                >PAYER</Button>
                <div style={{textAlign: "right"}}>
                    <h3>Sub total: ${totalPrice(cartItems).toFixed(2)}</h3>
                    <h3>Vat: %15</h3>
                    <h1>Total: $252</h1>

                </div>
            </div>
            {/* Dialog */}
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
                >
              <CloseIcon />
            </IconButton>
              Total a payer: ${totalPrice(cartItems).toFixed(2)}  
            </Dialog>
            
        </Wrapper>
    )
}

export default Facture
