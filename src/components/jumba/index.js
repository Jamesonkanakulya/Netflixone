import React from 'react'
import {Container, Inner,Pane,Title,Item,Subtitle,Image } from './styles/jumbo'

function Jumbo({children,direction = "row",...props}) {
    return (
        <>
            <Item >
            <Inner direction={direction}>
                {children}

            </Inner>

            </Item>
            
          
            
        </>
    )
}

export default Jumbo

Jumbo.Container = function JumbaContainer({children,...props}){
    return <Container {...props}>
        {children}
    </Container>
}
Jumbo.Pane = function JumbaPane({children,...props}){
    return <Pane {...props}>
        {children}
    </Pane>
}
Jumbo.Title = function JumbaTitle({children,...props}){
    return <Title {...props}>
        {children}
    </Title>
}
Jumbo.Subtitle = function JumbaSubtitle({children,...props}){
    return <Subtitle {...props}>
        {children}
    </Subtitle>
}
Jumbo.Image = function JumbaSubtitle({children,...props}){
    return <Image {...props}/>
      
}
