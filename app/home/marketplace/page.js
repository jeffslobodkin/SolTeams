"use client"
import DescriptionForm from "./components/Form"
import Inventory from "./components/inventory"
import Navbar from "./components/Navbar"
import React, { useState } from "react";
import styles from './page.module.scss';

export default function Marketplace({ setIsProfile, isProfile }) {
    const [searchValue, setSearchValue] = useState("");
    return (
        <div className={`${styles.marketplace} ${isProfile ? styles.blurred : ''}`}>
            <Navbar setIsProfile={setIsProfile} searchValue={searchValue} setSearchValue={setSearchValue}/>
            <Inventory searchValue={searchValue} />
        </div>
    )
}
