import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from "react";
import s from "../../../../p1-main/m1-ui/u1-app/App.module.css";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {

        onChangeOption && onChangeOption(e.currentTarget.value)
    }


    const mappedOptions: JSX.Element[] = options ? options.map((o, i) => ( // map options with key
            <label className={s.blockRadio} key={name + "-" + i}>
                <input className={s.radio} type={'radio'} value={o} checked={value===o} onChange={onChangeCallback}
                       name={name} {...restProps}/>
                {o}
            </label>
        )) :
        [];

    return (
        <>
            {mappedOptions}
        </>
    );
}

export default SuperRadio;
