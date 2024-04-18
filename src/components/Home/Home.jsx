import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import EstateCard from "./EstateCard";

const Home = () => {
    const estates = useLoaderData();
    console.log(estates)
    return (
        <div className="m-12 w-3/4 mx-auto">
            <Helmet>
                <title>home | page</title>
            </Helmet>
            <h1 className='text-3xl font-bold text-center mb-8'>Here is some Estate Section </h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-center gap-6">
                {
                estates.map(estate => <EstateCard key={estate.id} estate={estate}></EstateCard>)
                }
            </div>
          <div>
          </div>
        </div>
    );
};

export default Home;