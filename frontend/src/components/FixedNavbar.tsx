import { ThemeSwitcher } from "./ThemeSwitcher";

const FixedNavbar = () => {
  return (
      <nav className="fixed bottom-4 left-0 right-0 mx-auto bg-blue-500 h-16 w-[95%] sm:w-[90%] md:w-[80%] rounded-lg">
          <div className="flex justify-between items-center h-full px-4">
            <div className="ml-4"><ThemeSwitcher /></div>
            <div className="flex flex-row gap-8">
              <p>About me</p>
              <p>Skills</p>
              <p>Projects</p>
            </div>
            <div className="mr-4">Contact</div>
          </div>
      </nav>
  );
};

export default FixedNavbar;

// add background changing with scrolling user
// add navigation and scroll smooth
// about me - skills - projects - contact
// STATE INITIAL PAS HIDE, puis en scrollant ca disparait un peu opacite faible, et si on le hover ca revient