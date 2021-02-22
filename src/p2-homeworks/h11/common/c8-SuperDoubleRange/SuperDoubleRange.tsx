import React from "react";
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import s from '../c7-SuperRange/SuperRange.module.css'
type SuperDoubleRangePropsType = {
    setValue2:(value:number)=>void
    setValue1:(value:number)=>void
    max:number
    min:number

}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        setValue2,min,max,setValue1

    }
) => {

    const onChange = (event: React.ChangeEvent<{}>, value:any) => {
        // console.log(event)
        setValue1(value[0])
        setValue2(value[1])

    }


    return (
        <div className={s.range}>
            <Typography gutterBottom>

            </Typography>
            <Slider
                value={[min,max]}
                onChange={onChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"

            />
        </div>
    );
}

export default SuperDoubleRange;
