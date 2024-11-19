import React from 'react'


function Page({ params }: { params: {id: string}}) {

    const { id } = params;
    return (
        <div>User Profile: {id}</div>
    )
}

export default Page
