import "./App.css";
import { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "./Navbar/Sidebar";
import { Container } from "@mui/material";
import Banner from "./Banner/Banner";
import Cards from "./Cards/Cards";
import Footer from "./Footer";
import Spinner from "./Spinner";
const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    useEffect(() => {
        if (!isLoading) {
            setTimeout(() => {
                setShowContent(true);
            }, 100);
        }
    }, [isLoading]);

    return (
        <>
            <CssBaseline />
            {isLoading ? (
                <Spinner />
            ) : (
                <div className={`content-container ${showContent ? "show" : ""}`}>
                    <Sidebar />
                    <Banner />
                    <Container>
                        <Cards />
                    </Container>
                    <Footer />
                </div>
            )}
        </>
    );
};

export default App;
