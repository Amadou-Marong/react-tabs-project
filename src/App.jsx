import { useEffect, useState } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [jobs, setJobs] = useState([])
  const [currentItem, setCurrentItem] = useState(0)


  const fetchData = async() => {
    try{
      const response = await fetch(url)
      const data = await response.json()
      // console.log(data);
      setJobs(data)
      setIsLoading(false)
    } catch(error) {
      console.log(error);
      setIsError(true)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  // console.log(jobs);
  if(isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    )
  }

  if(isError){
    return (
      <section className="jobs-center">
        <h3>An Error Occured</h3>
      </section>
    )
  }
  return (
    <section className="jobs-center">
        {/* <BtnContainer jobs={jobs} /> */}
        <BtnContainer jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem}/>
        <JobInfo jobs={jobs} currentItem={currentItem}/>
    </section>
  )
};
export default App;
