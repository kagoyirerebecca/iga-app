const CoursesList = () => { 
    return (
        <div className="float-left rounded-tl-xl rounded-bl-xl py-4 px-6 bg-whitesmoke w-[50%] min-h-[615px]">
            <h2 className="mb-2">Courses</h2>
            <div className="font-semibold">
                <a className="mr-2 text-sm">All</a>
                <a className="mr-2 text-sm text-silver">Enrolled</a>
                <a className="mr-2 text-sm text-silver">Completed</a>
                <a className="mr-2 text-sm text-silver">My Courses</a>
            </div>
            
        </div>
    )
}

export default CoursesList;
