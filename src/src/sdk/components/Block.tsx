import "../../../styles/index";

interface IProps{
    children: React.ReactNode
}

export default function Block(props: IProps) {
    return (
        <div className="Block">
            {props.children}
        </div>
    );
}