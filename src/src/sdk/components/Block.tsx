import React, { memo } from "react";
import "../../../styles/index";

interface IProps{
    children: React.ReactNode
}

function Block(props: IProps) {
    return (
        <div className="Block">
            {props.children}
        </div>
    );
}

export default memo(Block);