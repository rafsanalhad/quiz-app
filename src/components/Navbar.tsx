import React from 'react'

const Navbar = () => {
    const handleQuit = () => {
        window.location.href = '/';
      }
  return (
    <nav className="h-[70px] w-full flex flex-row items-center justify-between bg-[#F6F7FA]">
        <div className="navbar-brand ps-5 text-[20px] py-2 text-[#303234] font-semibold">SkillTest</div>
        <p>Anime Quiz</p>
        <button className="px-10 text-white h-full bg-[#4C5A9E]" onClick={handleQuit}>Quit</button>
    </nav>
  )
}

export default Navbar
