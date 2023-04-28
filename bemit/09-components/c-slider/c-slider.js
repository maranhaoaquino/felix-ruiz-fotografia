import React from "react";
import Container from "../../07-objects/o-container/o-container.js";
import Col from "../../07-objects/o-col/o-col.js";

export default ({posts})=>{
    const p = 'c-slider';
    const cols = {md: 12, sm: 8, xs: 4};

    return(
        <div className={`${p}`}>
            <Container>
                <Col cols={cols}>
                    <div className={`${p}__wrapper`}>
                        content here
                    </div>
                </Col>
            </Container>
        </div>
    )
}