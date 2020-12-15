export default function User (props){
    if (!props.item) {return ''}

    const {item} = props;
    return (
        <div>
            {item.name}-{item.username}-{item.email}
        </div>
    );
}