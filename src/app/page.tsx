import Image from "next/image";
import { ConnectButton } from "thirdweb/react";
import { client } from "./client";
import Login from "../../components/login";

export default function Home() {
  return (
    <>
      <div className=" flex items-center justify-between p-[20px]">
        <h1 className="text-3xl text-green-500 font-semibold">Homie's Swap</h1>
        <Login/>
      </div>

      <div>
        <h1>Contract Space</h1>
      </div>
    </>
  );
}

