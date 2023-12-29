import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Redirector = () => {
    const [urlObj, setUrlObj] = useState(null);
    const { shortCode } = useParams();

    useEffect(() => {
        getHandler(shortCode);
    }, [])
    
    async function getHandler(code) {
        const response = await axios.get(`https://sdapp-ivpony3d.b4a.run/${code}`);
        console.log(response.data);
        setUrlObj(response.data);
    }
    
    return (
        <div>
            <h1>Redirector</h1>
            <h2>{urlObj ? window.location.href = urlObj.originalURL : <>Loading..</>}</h2>
        </div>
    );
}

export default Redirector;