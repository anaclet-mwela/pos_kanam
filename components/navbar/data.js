import {Assessment, DashboardIcon, EventNote, PeopleAlt, Settings, ShoppingCart} from '@mui/icons-material';

export const menu = [
    {
        title: "Sale",
        icon:   <ShoppingCart />,
        link: '/home',
    },
    {
        title: "Receiving",
        icon:   <EventNote />,
        link: '/receiving',
    },
    {
        title: "Inventory",
        icon:   <Assessment />,
        link: '/inventory',
    },
    {
        title: "Users",
        icon:   <PeopleAlt />,
        link: '/users',
    },
    {
        title: "Settings",
        icon:   <Settings />,
        link: '/settings',
    },
]