import React from 'react'
import { SearchParams } from 'next/dist/server/request/search-params'
const page = ({params}: {params: {id: string}}) => {

    console.log(params)
    return (
        <div>{params.id}</div>
    )
}

export default page