export default function List(props) {
    const {list} = props;

    return (
        <ul className="list">
            {list.length !== 0 ? 
                list.map((elem, index) => {
                    return (
                        <li key={index}>
                            {`${index + 1}. ${elem.text} - осталось ${elem.expireTime}с.`}
                        </li>
                    );
                }) :
                null
            }
        </ul>
    );
}