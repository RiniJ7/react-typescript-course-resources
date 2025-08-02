

type CourseGoalProps = {
    title: string;
description: string;
}

export default function CourseGoal({
    title, description,
}: CourseGoalProps) {
    return (
    <div>
        <div>
            <h2>
                {title}
            </h2>
            <p>{description}</p>
        </div>
        <button>Delete</button>
    </div>
    );
}