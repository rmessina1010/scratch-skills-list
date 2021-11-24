import { withComp } from "./anhoc";

const Basic = function (props) {
    return (
        <div>{props.provided.stuffies.map(s => <p>{s}</p>)}</div>
    )
}

const ConsumerWithHOC = withComp(Basic);
export default ConsumerWithHOC;