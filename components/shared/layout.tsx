import { ReactElement } from "react";
import Footer from "./footer";
import Header from "./header";

type LayoutProps = {
    children: ReactElement | ReactElement[]
}

export default function Layout({children} : LayoutProps){

    return (
        <>
        <Header/>
        <main>
            {children}
            <Footer/>
        </main>
        </>
    )
}