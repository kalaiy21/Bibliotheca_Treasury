import React from "react";
import biblio_logo from '../resources/biblio_logo.png'

function Footer() {
    return (
        <div className="pb-[4rem]">
            <div className="border-[1px] border-[#8D795B] mb-[4rem]"></div>
            <div className="grid minilap:grid-cols-4 smphone:grid-cols-2 px-[5rem]">
                <div className="flex items-center justify-center">
                    <img className="w-[10rem] h-[10rem]" src={biblio_logo} alt="bibliotheca logo"/>
                </div>
                <div className="font-light text-white font-Inconsolata py-[2rem] desktop:px-[3rem] laptop:px-[2rem] smphone:px-[1.5rem]">
                    <h3 className="mb-[1.5rem] text-[1.2rem]">WEBSITES</h3>
                    <ul className="text-[1.1rem]">
                        <li className="hover:underline underline-offset-1"><a href="https://atlas.bibliothecadao.xyz/">Bibliotheca DAO</a></li>
                        <li className="hover:underline underline-offset-1"><a href="https://realms.briq.construction/">Briqs</a></li>
                        <li className="hover:underline underline-offset-1"><a href="https://testnet.playoasis.xyz/">Play Oasis</a></li>
                        <li className="hover:underline underline-offset-1"><a href="https://starkware.co/starknet/">StarkWare</a></li>
                    </ul>
                </div>
                <div className="font-light text-white font-Inconsolata py-[2rem] desktop:px-[3rem] laptop:px-[2rem] smphone:px-[1.5rem]">
                    <h3 className="mb-[1.5rem] text-[1.2rem]">WEBSITES</h3>
                    <ul className="text-[1.1rem]">
                        <li className="hover:underline underline-offset-1"><a href="https://atlas.bibliothecadao.xyz/">Bibliotheca DAO</a></li>
                        <li className="hover:underline underline-offset-1"><a href="https://realms.briq.construction/">Briqs</a></li>
                        <li className="hover:underline underline-offset-1"><a href="https://testnet.playoasis.xyz/">Play Oasis</a></li>
                        <li className="hover:underline underline-offset-1"><a href="https://starkware.co/starknet/">StarkWare</a></li>
                    </ul>
                </div>
                <div className="font-light text-white font-Inconsolata py-[2rem] desktop:px-[3rem] laptop:px-[2rem] smphone:px-[1.5rem]">
                    <h3 className="mb-[1.5rem] text-[1.2rem]">WEBSITES</h3>
                    <ul className="text-[1.1rem]">
                        <li className="hover:underline underline-offset-1"><a href="https://atlas.bibliothecadao.xyz/">Bibliotheca DAO</a></li>
                        <li className="hover:underline underline-offset-1"><a href="https://realms.briq.construction/">Briqs</a></li>
                        <li className="hover:underline underline-offset-1"><a href="https://testnet.playoasis.xyz/">Play Oasis</a></li>
                        <li className="hover:underline underline-offset-1"><a href="https://starkware.co/starknet/">StarkWare</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer