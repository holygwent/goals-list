import CourseGoal from './CourseGoal.tsx'
import {type CourseGoal as CourseGoalType}  from '../App.tsx'
interface CourseGoalListProps{
 goals:CourseGoalType[]
 onDeleteGoal:(id:number)=>void;
};
const CourseGoalList = ({goals,onDeleteGoal}:CourseGoalListProps) =>{
    return(
        <ul>
        {goals.map((goal)=>
            <li key={goal.id}>
                <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
                    <p>{goal.description}</p>
                </CourseGoal>
            </li>)
        }
        </ul>
    )
}

export default CourseGoalList;