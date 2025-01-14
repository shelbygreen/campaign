import React from "react"
import Link from "next/link"

export default function jumpBox(props) {
    return (
        <div class="box-border h-full w-3/6 p-4 border-4 bg-vgreen text-white">
        <Link href={props.id}>Jump to Data Visualization</Link>
        </div>
    )
} 