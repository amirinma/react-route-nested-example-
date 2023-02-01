import React from "react"
import {Link} from "react-router-dom"
export default function Dogs(){
    return (
        <div>
            <nav>
                <li>
                    <Link to="/dogs/lp">Low Prices</Link>
                </li>
                <li>
                    <Link to="/dogs/hp">High Prices</Link>
                </li>
            </nav>
        </div>
    )
}