import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import preloader from './tms-loading.gif'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC, TypeStateLoadingReducer} from "./bll/loadingReducer";

function HW10() {
    const dispatch = useDispatch()
  const loading = useSelector<AppStoreType,TypeStateLoadingReducer>(state=>state.loading)

    const setLoading = () => {
        dispatch(loadingAC())
        setTimeout(()=>{
            dispatch(loadingAC())

        },2000)
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {loading.loading
                ? (
                    <div>
                        <img style={{
                            width:'100px',
                            height:'100px'
                        }}  alt='Preloader' src={preloader}/>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>

            <hr/>
        </div>
    );
}

export default HW10;
