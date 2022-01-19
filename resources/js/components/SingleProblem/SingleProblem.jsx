import React, { useEffect, useContext, useCallback } from "react";
import ProblemContext from "../../context/problems/problemsContext"
import { useStopwatch } from "react-timer-hook";
import { formatTime } from "../../scripts/timerFormat";
import { useHistory } from "react-router-dom";
import Header from '../Header/Header';


const defaultFormValues = {
    fix_time: "0",
    fixed: "Čekající",
};

const SingleProblem = ({ match }) => {


    const problemsContext = useContext(ProblemContext);
    const {
        loading,
        problem,
        getProblem,
        deleteProblem,
        fixProblem } = problemsContext;


  

    useEffect(() => {
      
            getProblem(match.params.id);
        
        

        if(!problem.fix_time){
            setValues({...values,fixed:problem.fixed})
        }else {
        setValues({fixed:problem.fixed, fix_time:problem.fix_time})
        }
    }, [problem.fix_time, problem.fixed])

    const [values, setValues] = React.useState(defaultFormValues);

    const history = useHistory();


    const onDelete = async () => {
        deleteProblem(match.params.id);
        history.push("/");
    };

    const { seconds, minutes, hours, start, pause, reset, isRunning } =
        useStopwatch({ autoStart: false });

    const handleSubmit = (e) => {
        e.preventDefault();
      
        

        fixProblem(match.params.id, values)
    };

    const onChange = (e) =>
        setValues({ ...values, [e.target.name]: e.target.value });



    useEffect(() => {
        setValues({ ...values, fix_time: formatTime(seconds, minutes, hours) });
    }, [seconds, minutes, hours]);

    

    return (
        <>
            <Header />
            <main>


                {loading ? (
                    <span>Loading...</span>
                ) : (

                    <div className="main singleProblem">
                        {problem.name && (
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Autor: </td>
                                        <td>{problem.user.name}</td>
                                    </tr>
                                    <tr>
                                        <td>Místnost: </td>
                                        <td>{problem.room}</td>
                                    </tr>
                                    <tr>
                                        <td>Co nefunguje?: </td>
                                        <td>{problem.name}</td>
                                    </tr>
                                    <tr><td>Komentář: </td><td>{problem.description}</td></tr>
                                    <tr><td>Datum vytvoření: </td><td>{problem.created_at.slice(0, 10)}</td></tr>
                                    <tr><td>Poslední úprava: </td><td>{problem.updated_at.slice(0, 10)}</td></tr>
                                    <tr><td>Stav: </td><td className={problem.fixed ==  "Čekající" ? "warn" : problem.fixed=="Probíhá" ? "" : "done"}>{problem.fixed}</td></tr>
                                    <tr><td>Délka opravy: </td><td>{problem.fix_time ? problem.fix_time : "0"}</td></tr>
                                </tbody>
                            </table>
                        )}

                        <form onSubmit={handleSubmit} className="form login100-form validate-form">

                            <div style={{margin: "10px 0 40px 0"}} className="wrap-input100 validate-input mg" data-validate="Zadejte stav">
                                <span className="btn-show-pass">
                                    <i className="zmdi zmdi-eye"></i>
                                </span>

                                <select 
                                className={`input100 ${values.fixed != null && "has-val"}`} 
                                onChange={onChange} 
                                name="fixed">
                                    <option value="Čekající">Čekající</option>
                                    <option value="Probíhá">Probíhá</option>
                                    <option value="Opraveno">Opraveno</option>
                                </select>





                                <span className="focus-input100" data-placeholder="Stav"></span>
                            </div>

                            <div style={{margin: "30px 0"}} className="wrap-input100 validate-input mg" data-validate="Zadejte čas prosím">
                                <span className="btn-show-pass">
                                    <i className="zmdi zmdi-eye"></i>
                                </span>
                                <input className={`input100 ${isRunning || values.fix_time != "" ? "has-val" : ""}`} type="text" name="fix_time"

                                    value={values.fix_time}
                                    onChange={onChange}

                                />
                                <span className="focus-input100" data-placeholder="Čas"></span>
                            </div>

                            <div className="playButtons">
                                {isRunning ? (
                                    <button title="Pauza" type="button" className='edit' onClick={pause}><i className="fas fa-pause"></i></button>
                                ) : (
                                    <button title="Začít" type="button" className='edit' onClick={start}><i className="fas fa-play"></i></button>
                                )}


                                <button title="Reset" type="button" className='edit' onClick={() => reset(0, false)}><i className="fas fa-redo"></i></button>
                                <button title="Opravit" type="submit" className='edit'><i className="fas fa-wrench"></i></button>
                            </div>

                        </form>
                        <button title="Smazat problém" onClick={onDelete} className='edit single-trash'><i className="fas fa-trash"></i></button>

                    </div>)

                }
            </main>
        </>

    );
};

export default SingleProblem;

