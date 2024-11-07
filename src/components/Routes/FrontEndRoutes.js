import { createBrowserRouter } from "react-router-dom"
import Page from "../pageComponent/Page"
import HomeStyled from "../PageComponents/Home.Styled"
import AboutStyled from "../PageComponents/About/About.Styled"
import ContactStyled from "../PageComponents/Contact/Contact.Styled"
import NotFound from "../CommonComponents/PageNotFound/NotFound";
import ProductStyled from "../PageComponents/Product/Product.Styled"

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
                element:<ProductStyled/>
            },
            {
                path: '*',
                element: <NotFound/>
            }
        ]
    }
])



export default FrontEndRoutes;