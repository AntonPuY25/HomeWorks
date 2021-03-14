import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test',
})
type TypeResponseData = {
    errorText: string
    info: string
    yourBody: {
        success: boolean
    }
    yourQuery: {}
}
const RequestApi = {
    orderPost(value: string) {
        return instance.post<TypeResponseData>('', {
            success: value === '1' ? true : value
        })
            .then(response => {
                return response.data
            })


    }
}
export default RequestApi;