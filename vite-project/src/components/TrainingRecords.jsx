import s from "./TrainingRecords.module.css"
import { useRef } from "react";

export const TrainingRecords = (props) => {
    const ref = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        const { target } = e;

        const formData = new FormData(target);
        const entries = formData.entries();

        const data = Object.fromEntries(entries);
        props.callback(data);
        ref.current.reset();
        
        
    };

    return (
        <form className={s.form} ref={ref} onSubmit={onSubmit}>
            <label className={s.label} htmlFor="date">Дата (ДД.ММ.ГГ)</label>
            <label className={s.label} htmlFor="distance">Пройдено км</label>
            <button  className={s.button} type="submit">OK</button>
            <input className={s.input} type="date" name="date"/>
            <input className={s.input} type="float" name="distance"/>
            
        </form>
    )
}