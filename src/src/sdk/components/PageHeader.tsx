import "../../../styles/index";

interface IProps{
    title: string
}

export default function PageHeader(props: IProps) {
    return (
        <h1>{props.title}</h1>

    );
}