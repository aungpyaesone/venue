import React from "react";

import {Drawer,List,ListItem} from "@mui/material"

const SlideDrawer = (props) =>{

    const links = [
        {where: 'featured', value: 'To top'},
        {where: 'venuenfo', value: 'Venue NFO'},
        {where: 'hightlights', value: 'Highlights'},
        {where: 'pricing', value: 'Pricing'},
        {where: 'location',value: 'Location'}
    ]

    const renderItem = (item) =>{
        return(
        <ListItem button onClick={()=> alert(item.where)} key={item.where}>
            {item.value}
        </ListItem>
        )
    }

    return(
       <Drawer
       anchor={"right"}
       open = {props.open}
       onClose={()=> props.onClose(false)}
       >

        <List component="nav">
            {
                links.map((item)=> renderItem(item))
            }
        </List>

       </Drawer>
    )
}

export default SlideDrawer;