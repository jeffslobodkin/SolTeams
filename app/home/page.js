import Marketplace from "./marketplace/page"
import Profile from "./profile/page"
import Navbar from "./components/Navbar"


export default function Page() {
    return (
        <div>
            <Navbar />
            <Marketplace/>
        </div>
    )
}
