import {type FC, type ReactNode, type PropsWithChildren, Children } from 'react'
interface CourseGoalProps{
    id:number
    title:string;
    onDelete:(id:number)=>void;
    children:ReactNode;
}
const CourseGoal: FC<CourseGoalProps> = ({id,title,onDelete,children})=>{
    return (
        <article>
            <div>
            <h2>{title}</h2>
            <p>{children}</p>
            </div>
            <button onClick={()=>onDelete(id)}>Delete</button>
        </article>
    );
}
export default CourseGoal;