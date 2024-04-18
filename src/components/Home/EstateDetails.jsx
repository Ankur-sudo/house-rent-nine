import { HelmetData } from "react-helmet-async";
import { useParams } from "react-router-dom";

const EstateDetails = () => {
    const { id, image } = useParams();

    return (
        <div>
            <HelmetData>
                <title>Estate Details</title>
            </HelmetData>
            <h1>Hello Estate Details</h1>
            <img src={image} alt="Estate" />
            <p>ID: {id}</p>
        </div>
    );
};

export default EstateDetails;
