
export default async function Path({params, searchParams}: {params:Promise<any>, searchParams:Promise<any>}){


    const paramObj = (await params).file_path;

    console.log(paramObj);


    return( 
        <>
            
        </>
    )
}