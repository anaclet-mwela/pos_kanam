
import {Nav, MenuList, MenuItem} from './styles'
import {menu} from './data'

const Navbar = () => {
    return (
        <Nav>
            <MenuList>
              {menu.map((item, index)=>(
                    <MenuItem key={index} onClick={()=>{window.location.pathname=item.link}}>
                        <div>{item.icon}</div>
                        <div>{item.title}</div>
                    </MenuItem>
                ))}  
            </MenuList>
            
        </Nav>
    )
}

export default Navbar
