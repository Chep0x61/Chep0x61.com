import Globe from "@/components/icons/Globe";
import SquareArrow from "@/components/icons/SquareArrow";

interface Experience {
    title: string;
    location: string;
    duration: string;
    year: string;
    description: string;
    logo: string;
    href: string;
}

interface VerticalStepsProps {
    bubbleIcon: React.ReactNode;
    experiences: Experience[];
}

const VerticalSteps: React.FC<VerticalStepsProps> = ({bubbleIcon, experiences}) => {
    return (
        <div className={`max-w-[95%] space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent`}>
            {experiences.map((experience: any, index) => (
                <div key={index}
                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div
                        className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#1a1a1a] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        {bubbleIcon}
                    </div>

                    <div
                        className="w-[calc(100%-5rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-[gray-100] p-2 md:p-4 rounded border border-slate-200 shadow-xl max-w-sm md:max-w-2xl">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                            <div className="flex flex-row gap-1 items-center">
                                <img className={experience[5] ? 'w-8' : 'hidden'} src={experience[5]} alt="epit"/>
                                <div className="font-bold text-base text-slate-900">{experience[0]}</div>
                                <div className={experience[2] !== "" ? 'font-semibold text-sm text-slate-900' : 'hidden'}>{experience[2]}</div>
                            </div>
                            <div className={experience[6] ? 'mr-64' : 'hidden'}>
                                <SquareArrow href={experience[6]} color="black" initialSize="20" />
                            </div>
                        </div>
                        <div className="text-slate-900 mt-2 text-xs">{experience[4]}</div>
                        <div className="flex flex-row mt-4 ml-4 justify-end">
                            <div className="text-sm text-black">{experience[1]},&nbsp;</div>
                            <div className="font-semibold text-sm text-slate-900 ">{experience[3]}</div>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default VerticalSteps;