import Mail from "@/components/icons/Mail";
import LinkedIn from "@/components/icons/LinkedIn";
import Github from "@/components/icons/Github";

const FixedSocials = () => {
    return (
      <div className="hidden lg:flex fixed flex-col items-center bottom-0 left-12">
          <div className="flex flex-col gap-6 items-center pb-6">
              <Github />
              <Mail />
              <LinkedIn />
          </div>
          <div className="border-r-2 border-[#1a1a1a] dark:border-[#f8f8f8] h-24"></div>
      </div>
    )
}

export default FixedSocials;