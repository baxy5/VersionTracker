import { Navbar, Footer } from "./index"
import Children from "../interfaces/children"

const Layout = ({ children }: Children) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout