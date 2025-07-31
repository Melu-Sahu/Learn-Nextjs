export default async function Lectures({params} : {params:Promise<{courses:string[]}>}){

    var {courses} = await params;


    return (
        <div>
            
            Lectures
            
            {
                courses.map(course => (<li key={course}>{course}</li>))
            }

        </div>
    )
}