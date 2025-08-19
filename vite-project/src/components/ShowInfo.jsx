import s from './ShowInfo.module.css'

export const ShowInfo = (props) => {

    function handler(data) {
        props.callback(data);
    }
    return (
        <div className={s.show_info}>
            <div className={s.title}>
                <div className={s.title_item}>Дата (ДД.ММ.ГГ)</div>
                <div className={s.title_item}>Пройдено км</div>
                <div className={s.title_item}>Действия</div>
            </div>
            <div className={s.container}>
                {props.data.map((item) => (
                    <div className={s.container_row}>
                        <div className={s.row_item}>
                            {item.date}
                        </div>
                        <div className={s.row_item}>
                            {item.distance}
                        </div>
                        <button className={s.row_item} onClick={() => handler(item.date)}>✘</button>
                    </div>
                 ))}
            </div>
        </div>
    )
}