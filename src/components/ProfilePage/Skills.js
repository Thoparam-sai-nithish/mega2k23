import React from 'react'

function Skills() {

//useeffect
const skills=["css","git","ruby","php","user research","QA","prompt generation","HTML"]



  return (
    <div className='h-100'>
       <h4 className='text-center fw-bold'>Skills</h4>
       <div className="row">
      {skills.map((e)=>
       (<div className="col-sm-5 m-auto my-1 text-center border rounded   bg-light ">
        {e}
       </div>)
      )}
       </div>
    </div>
  )
}

export default Skills