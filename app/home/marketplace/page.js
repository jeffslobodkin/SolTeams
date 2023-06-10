"use client"

import DescriptionForm from "./components/Form"
import Inventory from "./components/inventory"
import Navbar from "./components/Navbar"
import React, { useState } from "react";


export default function Marketplace() {

    const [searchValue, setSearchValue] = useState("");
    return (
        <div>
            <Navbar searchValue={searchValue} setSearchValue={setSearchValue} />
            <Inventory searchValue={searchValue} />
        </div>
    )
}
