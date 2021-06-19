import React from "react";
import { PageTittleContainer, PageTittleStyled, PageSubtittleStyled } from "./PageTittle.style";

interface PageTittleProps{
    tittle : string,
    subtittle?: string
}

const PageTittle: React.FC<PageTittleProps> = (props) => {
    return (
        <PageTittleContainer>
            <PageTittleStyled>{props.tittle}</PageTittleStyled>
            <PageSubtittleStyled>{props.subtittle}</PageSubtittleStyled>
        </PageTittleContainer>
    )
}

export default PageTittle