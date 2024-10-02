import React from 'react';
import Menu from '../components/Menu';

function Home() {
    return (
        <div className="flex h-full">
            <div className="container_left w-[10%] max-w-[100px]">
                <Menu></Menu>
            </div>
            <div className="container_right">

            </div>
        </div>
    );
}

export default Home;