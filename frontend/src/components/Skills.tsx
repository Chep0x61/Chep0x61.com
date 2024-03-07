const Skills = () => {
    return (
      <div className="flex flex-col justify-center bg-red-300 h-screen text-center">
        <div>Skills</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
        <div className="bg-blue-300 w-44 h-44 text-center">
            DEVLOPMENT
          </div>
          <div className="bg-blue-300 w-44 h-44 text-center">
            FRONTEND
          </div>
          <div className="bg-blue-300 w-44 h-44">
            BACKEND
          </div>
          <div className="bg-blue-300 w-44 h-44">
            DEPLOYMENT
          </div>
          <div className="bg-blue-300 w-44 h-44 text-center">
            SECU TOOLS 
          </div>
          <div className="bg-blue-300 w-44 h-44 text-center">
            OPERATING SYSTEMS
          </div>
        </div>
      </div>
    )
  }

export default Skills;