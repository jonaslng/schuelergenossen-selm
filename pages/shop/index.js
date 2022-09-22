import ProductList from "./_productList"
import Navbar from "../_Navbar"
import Footer from "../_footer"
import { MantineProvider } from "@mantine/core"

export default function Shop() {
    return (
        <>
            <Navbar />
            <ProductList />
            <MantineProvider theme={{colorScheme: "dark"}}>
                <Footer />
            </MantineProvider>
        </>
    )
}