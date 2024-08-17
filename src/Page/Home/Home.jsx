import Items from "../../Componenet/Items/Items";
import { Helmet } from "react-helmet-async";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Product Showcase </title>
            </Helmet>
            <Items></Items>
        </div>
    );
};

export default Home;