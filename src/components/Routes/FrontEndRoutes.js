import { createBrowserRouter } from "react-router-dom"
import Page from "../pageComponent/Page"
import HomeStyled from "../PageComponents/Home.Styled"
import AboutStyled from "../PageComponents/About/About.Styled"
import ContactStyled from "../PageComponents/Contact/Contact.Styled"
import NotFound from "../CommonComponents/PageNotFound/NotFound";
import ProductData from './../PageComponents/Product/ProductData';
const FrontEndRoutes = createBrowserRouter([
    {
        path:'/',
        element: <Page/>,
        children:[
            {
                path:'',
                element: <HomeStyled/>
            },
            {
                path:'about',
                element:<AboutStyled/>
            },
            {
                path:'contact',
                element:<ContactStyled/>
            },
            {
                path:'products',
                element:<ProductData/>
            },
            {
                path: '*',
                element: <NotFound/>
            }
        ]
    }
])



export default FrontEndRoutes;