export default function Button({type, value, onClickHandler, id}) {
    return <button id={id} type={type} onClick={onClickHandler}>{value}</button>
}