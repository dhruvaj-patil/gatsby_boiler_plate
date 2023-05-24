import React from 'react'
import {Helmet, HelmetProps} from "react-helmet";



export interface HeaderProps {
    name?: string,
    navItems?: any //will be replaced by navItems
    seoDetails?: HelmetProps // will be replaced by React Helmet Props
}

const TopBar = (props: HeaderProps) => {
  return (
    <div>
        <div>
            <Helmet {...props.seoDetails}></Helmet>
            {/* NAVBAR Component goes below */}
            {<h1> {props.name}</h1> }
        </div>
    </div>
  )
}


export default TopBar