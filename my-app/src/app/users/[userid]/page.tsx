
export default async function UserDetails({params} :{params: Promise<{userid:string}>}){


    // const userid = (await params).userid;
    const { userid } = await params;

    return (
        <div>
            User Details : {userid}
        </div>
    )
}