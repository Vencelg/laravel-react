import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';


const  Index = () => {
    const [kokot, setKokot] = useState('');
    useEffect( async () => {
        const res = await fetch('http://127.0.0.1:8000/api/test');
        const data = await res.json();

        console.log(data);
    }, []);

    
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example asd asdasdsddadsd  fsdhgdfhnhasdahoj</div>
                            
                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;


