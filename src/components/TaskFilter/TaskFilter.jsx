import "./TaskFilter.css"
const TaskFilter = ({currentFilter, onFilterChange, total, active, completed}) => {
    return ( 
        <>
        <div className="filter_container">
            <button onClick={() => onFilterChange("all")} className={`allBtn ${currentFilter == "all" ? "active" : ""}`}>All ({total})</button>
            <button onClick={() => onFilterChange("completed")} className={`allBtn ${currentFilter == "completed" ? "active" : ""}`}>Completed ({completed})</button>
            <button onClick={() => onFilterChange("active")} className={`allBtn ${currentFilter == "active" ? "active" : ""}`}>Active ({active})</button>
        </div>
        </>
     );
}
 
export default TaskFilter;