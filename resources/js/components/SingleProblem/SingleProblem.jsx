import React, { useEffect } from "react";
import useProblem from "../../hooks/useProblem";
import useFixProblem from "../../hooks/useFixProblem";
import { useStopwatch } from "react-timer-hook";
import { formatTime } from "../../scripts/timerFormat";
import { Link, useHistory } from "react-router-dom";
//import { } from "@reach/router"
import useDeleteProblem from "../../hooks/useDeleteProblem.js";

const defaultFormValues = {
    fix_time: "0",
    fixed: true,
};

const SingleProblem = ({ match }) => {
    const problemQuery = useProblem(match.params.id);
    const { problem } = { ...problemQuery.data };


    const createFixQuery = useFixProblem(match.params.id);
    const [values, setValues] = React.useState(defaultFormValues);

    const history = useHistory();
    const [deleteProblem, deleteProblemInfo] = useDeleteProblem();

    const onDelete = async () => {
        await deleteProblem(match.params.id);

        history.push("/");
    };

    const { seconds, minutes, hours, start, pause, reset } =
        useStopwatch({ autoStart: false });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(match.params.id);
        createFixQuery.mutateAsync(values).then(() => problemQuery.refetch());
    };

    useEffect(() => {
        setValues({ ...values, fix_time: formatTime(seconds,minutes,hours) });
        console.log(values);
    }, [seconds,minutes,hours]);

    return (
        <div>
            {problemQuery.isError && problemQuery.error}
            {problemQuery.isLoading ? (
                <span>Loading...</span>
            ) : (
                <div>
                    <Link to="/">Back</Link>
                    <div>
                        <div>
                            {problem.name} | {problem.description} |{" "}
                            {problem.id} | {problem.created_at}{" "}
                        </div>
                        <div>
                            {problem.user.name} | {problem.user.admin} |{" "}
                            {problem.user.id}{" "}
                        </div>
                        <div>
                            {problem.fix_time} | {problem.fixed}
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="form">
                        
                        <div style={{ fontSize: "30px" }}>
                            <span>{values.fix_time}</span>
                        </div>
                        
                        
                        <button type="button" onClick={start}>Start</button>
                        <button type="button" onClick={pause}>Pause</button>
                        <button type="button" onClick={()=>reset(0,false)}>Reset</button>
                        <button type="submit">Fix</button>
                    </form>
                    <button onClick={onDelete}>Delete</button>
                </div>
            )}
        </div>
    );
};

export default SingleProblem;

/*  <h3>React Stopwatch</h3>
                        <div className="stopwatch-card">
                            <p>{formatTime(timer)}</p>
                            <div className="buttons">
                                {!isActive && !isPaused ? (
                                    <button type="button" onClick={handleStart}>Start</button>
                                ) : isPaused ? (
                                    <button type="button"  onClick={handlePause}>Pause</button>
                                ) : (
                                    <button type="button"  onClick={handleResume}>
                                        Start
                                    </button>
                                )}
                                <button
                                    onClick={handleReset}
                                    disabled={!isActive}
                                >
                                    Reset
                                </button>
                                <button type="submit" onClick={handlePause}  disabled={!isActive}>
                                       Fix
                                 </button>
                            </div>
                        </div> */
