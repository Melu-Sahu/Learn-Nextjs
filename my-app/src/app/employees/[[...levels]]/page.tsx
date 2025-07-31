

export default async function Positions({params} : {params :Promise<{levels: string[]}>}){

    const {levels} = await params;

    if(levels?.length >=2 ){
        return (
            <div>
                There is 2 or more then 2 levels
            </div>
        )
    }

    if(levels?.length == 1){
        
        return (
            <div>
                there is only 1 level
            </div>
        )
    }

    return (
        <div>
            There is no any level
        </div>
    )

}