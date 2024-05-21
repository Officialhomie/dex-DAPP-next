'use client'

import { chain, client } from "@/app/client";
import { ConnectButton } from "thirdweb/react";

const Login: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[100vh]">
               <ConnectButton client={client} chain={chain}/>         
        </div>
    )
};

export default Login;