import React from 'react'
import "./dashboard.css"
import Image from 'next/image'

const Dashboard = () => {
  return (
    <div>
       <div className="w-[100vh] h-[1047px] relative bg-gray-50 bg-opacity-90">
    <div className="w-[276px] h-[116px] left-[315px] top-[100px] absolute">
        <div className="w-[276px] h-[116px] left-0 top-0 absolute">
            <div className="w-[276px] h-[116px] left-0 top-0 absolute bg-white rounded-[10px]" />
            <div className="w-[190px] h-[60px] left-[26px] top-[29px] absolute">
                <div className="left-[85px] top-[4px] absolute opacity-70 text-black text-[22px] font-extrabold font-['Nunito']">00+</div>
                <div className="left-[85px] top-[35px] absolute opacity-70 text-slate-950 text-sm font-normal font-['Nunito']">Tests Attempted</div>
                <img className="w-[60px] h-[60px] left-0 top-0 absolute" src="https://s3-alpha-sig.figma.com/img/ff98/4a9b/130efbdc9c5eff98b2e9256c98bf7a17?Expires=1696204800&Signature=G0lWldZSxa7XUS-eoa~iI4JzM8L2sPIvIGviUN1sha5vQcQU7QhAKq-01aypUmFY9d8IQ-rNQqZVSg7WNV1sQSCthFvU0gzBnOL4ITRJfWboFbjZ0RKgCr7T9nlD37hu9GOXCaFYBsarTkj8z3AWnKMcd~y~J2D77KAS7Hd0Ymg164Rd~gb3nWGtjeIWOKBxP9Lh3CXs9DhJgt0jXt6mQ1rc2dLiEJMqMGAlBeXTU2lyOHlihWZFaU9epC0N1Da0UzlU-sAx7RTyCrnwkLxeTFUg1XmsY~kDunDv4PpKS5U7N31K62xXBZ~wHshX5i6~FdB9FiX2WZ7KW6WFgg1HqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            </div>
        </div>
    </div>
    <div className="left-[319px] top-[37px] absolute text-slate-950 text-2xl font-bold font-['Nunito']">Dashboard</div>
    <div className="w-[467px] h-[802px] left-[877px] top-[126px] absolute">
        <div className="w-[467px] h-[297px] px-[21.23px] pb-[206.56px] left-0 top-[360px] absolute flex-col justify-start items-start gap-[8.22px] inline-flex">
            <div className="self-stretch h-[20.55px] pr-[322.55px] pb-[0.55px] justify-start items-center inline-flex">
                <div className="text-zinc-800 text-base font-medium font-['Montserrat']">Department</div>
            </div>
            <div className="w-[424.55px] h-[61.66px] relative">
                <div className="w-[424.55px] h-[61.66px] left-0 top-0 absolute bg-white rounded-lg shadow" />
                <div className="w-[278.99px] h-[20.55px] pr-[124.99px] pb-[0.55px] left-[24.26px] top-[20.55px] absolute justify-start items-center inline-flex">
                    <div className="text-stone-500 text-base font-normal font-['Montserrat']">Select Department</div>
                </div>
            </div>
        </div>
        <div className="w-[467px] h-[297px] left-0 top-[505px] absolute">
            <div className="w-[424.55px] h-[20.55px] pr-[311.55px] pb-[0.55px] left-[21.23px] top-0 absolute justify-start items-center inline-flex">
                <div className="text-zinc-800 text-base font-medium font-['Montserrat']">Specialization</div>
            </div>
            <div className="w-[424.55px] h-[61.66px] left-[21.23px] top-[28.78px] absolute">
                <div className="w-[424.55px] h-[61.66px] left-0 top-0 absolute bg-white rounded-lg shadow" />
                <div className="w-[278.99px] h-[20.55px] pr-[113.99px] pb-[0.55px] left-[24.26px] top-[20.55px] absolute justify-start items-center inline-flex">
                    <div className="text-stone-500 text-base font-normal font-['Montserrat']">Select Specialization</div>
                </div>
            </div>
            <div className="w-[467px] h-[268.22px] left-0 top-[133px] absolute" />
            <div className="w-[154px] h-10 left-[156px] top-[128px] absolute">
                <div className="w-[154px] h-10 left-0 top-0 absolute opacity-10 rounded-[10px] border border-indigo-500" />
                <div className="w-[130px] h-5 left-[12px] top-[12px] absolute text-center text-indigo-500 text-sm font-normal font-['Nunito'] tracking-wide">Pre-Assessment<br/></div>
            </div>
        </div>
        <div className="w-[424.55px] h-[88.66px] left-[21px] top-[221px] absolute">
            <div className="w-[424.55px] h-[20.55px] pr-[388.55px] pb-[0.55px] left-0 top-0 absolute justify-start items-center inline-flex">
                <div className="text-zinc-800 text-base font-medium font-['Montserrat']">Year</div>
            </div>
            <div className="w-[424.55px] h-[61.66px] left-0 top-[27px] absolute">
                <div className="w-[424.55px] h-[61.66px] left-0 top-0 absolute bg-white rounded-lg shadow" />
                <div className="w-[278.99px] h-[20.55px] pr-[190.99px] pb-[0.55px] left-[24.26px] top-[20.55px] absolute justify-start items-center inline-flex">
                    <div className="text-stone-500 text-base font-normal font-['Montserrat']">Select Year</div>
                </div>
            </div>
        </div>
        <div className="w-[467px] h-[297px] pl-[21px] pr-[21.23px] pb-[206.56px] left-0 top-[83px] absolute flex-col justify-start items-start gap-[8.22px] inline-flex">
            <div className="self-stretch h-[20.55px] pr-[382.55px] pb-[0.55px] justify-start items-center inline-flex">
                <div className="text-zinc-800 text-base font-medium font-['Montserrat']">Level</div>
            </div>
            <div className="w-[424.55px] h-[61.66px] relative">
                <div className="w-[424.55px] h-[61.66px] left-0 top-0 absolute bg-white rounded-lg shadow" />
                <div className="w-[278.99px] h-[20.55px] pr-[183.99px] pb-[0.55px] left-[24.26px] top-[20.55px] absolute justify-start items-center inline-flex">
                    <div className="text-stone-500 text-base font-normal font-['Montserrat']">Select Level</div>
                </div>
            </div>
        </div>
        <div className="w-[269px] h-[54px] left-[21px] top-0 absolute text-slate-950 text-[32px] font-extrabold font-['Montserrat']">Student Details</div>
    </div>
    <div className="w-[276px] h-[99px] left-[315px] top-[299px] absolute">
        <div className="w-[276px] h-[99px] left-0 top-0 absolute bg-indigo-500 rounded-[10px]" />
        <div className="w-[231.19px] h-[42.08px] left-[23.30px] top-[29.70px] absolute text-center text-white text-[32px] font-normal font-['Nunito'] tracking-widest">Assessments<br/></div>
    </div>
    <div className="w-10 h-10 left-[1203px] top-[46px] absolute origin-top-left rotate-90 bg-white rounded-full border border-zinc-800" />
    <div className="w-10 h-10 left-[1311px] top-[46px] absolute origin-top-left rotate-90 bg-neutral-400 rounded-full" />
    <div className="w-[218px] h-[1047px] left-0 top-0 absolute">
        <div className="w-[218px] h-[1047px] left-0 top-0 absolute bg-white" />
        <div className="w-[99px] h-6 left-[28px] top-[414px] absolute">
            <div className="left-[38px] top-[1px] absolute opacity-50 text-slate-950 text-base font-semibold font-['Nunito']">Settings</div>
            <div className="w-6 h-6 left-0 top-0 absolute opacity-40 flex-col justify-start items-start inline-flex">
                <img className="w-[19px] h-5" src="https://www.iconpacks.net/icons/2/free-settings-icon-3110-thumb.png" />
            </div>
        </div>
        <div className="w-[123px] h-6 left-[26px] top-[359px] absolute">
            <div className="left-[38px] top-[1px] absolute opacity-50 text-slate-950 text-base font-semibold font-['Nunito']">Notification</div>
            <div className="w-6 h-6 left-0 top-0 absolute opacity-40 flex-col justify-start items-start inline-flex">
                <img src="https://cdn-icons-png.flaticon.com/512/565/565422.png" className="w-6 h-6 left-0 top-0 absolute"  alt = "notification-icon"/> 
            </div>
        </div>
        <div className="w-[116px] h-6 left-[28px] top-[305px] absolute">
            <div className="left-[38px] top-[1px] absolute opacity-50 text-slate-950 text-base font-semibold font-['Nunito']">Guidelines</div>
            <img className="w-6 h-6 left-0 top-0 absolute" src="https://s3-alpha-sig.figma.com/img/1e6e/b563/5afc9fccf2b4d215ca29193e73a41bbd?Expires=1696204800&Signature=Mn4lTD9VCw8L5Rya~iyYq6UCCi6QWCEZcHxnNPjRHQtii2fcDGPfMY6BZBURnhXXsdlO0tFjtrdoDBEDkbHze6kExF1AiQfv9FxUoWBqbfEm3GXlDwmenljaBP9kZ1hz0XXVLvzqssXultTellfZyc2NRtMhebWON3IVm7-Q1m8iFZkKp5CfNpBN~GN9g8mhAgkGLBXgP6WI~FSTnD4BBFDJoNsBbMY2Vf04xV6SGvi4lz0kKrl8uYzaCL~0NTMNe7ps7iEP6Rwhjihn9EQeMCA7IdRT8cSNgH0OSis2jkckMraf2nlbVQi6~Rl792Fz8SL~L~qvJlsT8LmiAcI7qA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
        </div>
        <div className="w-[118px] h-[41px] left-[28px] top-[243px] absolute">
            <div className="left-[38px] top-[9px] absolute opacity-50 text-slate-950 text-base font-semibold font-['Nunito']">Curriculum</div>
            <img className="w-6 h-[28px] left-0 top-2 absolute" src="https://s3-alpha-sig.figma.com/img/7bb8/1dd9/65f03475e004aadd74673602f934046e?Expires=1696204800&Signature=GOoyK~dTwn1lidTekwjTo2XpeCqvREaHsU8rfLza4D90TcJWAoJ9e9MT7sLCWnb0QdGGv9ekOUd2TerGORBtcO1unwXbXFhFwhRCet5t6ipRlgHNmCWfnU1A1mdbgWkGscCkH33LGn4SKi~2ufq0XzwNJFnVvP~yRQVPvSo6JeX0dD5~ObtKxIgWS-wvTf9mqFtfBqgkfk6u9EITua2JRiO4j8WlFoqHhnila1kOm-tU91rlI1sftVMZ4bnVCjrJFjY~6OIohv7goQpzMopicfrbDPXe5q-6u9d7eXGrO3kvnfl6eGkC6PgT-Jk02zGqBNACt~ZmlrwD5SnUo0E0Kg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
        </div>
        <div className="w-[146px] h-12 left-0 top-[185px] absolute">
            <div className="left-[66px] top-[13px] absolute text-indigo-500 text-base font-semibold font-['Nunito']">Dashboard</div>
            <div className="w-6 h-6 left-[28px] top-[12px] absolute">
                <img className="w-5 h-5 left-[2px] top-[2px] absolute" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa_yU4uwFeVu1RXhexJ5K2bdXeeGkHug3JOw&usqp=CAU" />
            </div>
            <div className="w-[53px] h-12 left-0 top-0 absolute opacity-20 bg-gradient-to-r from-indigo-300 to-indigo-300 rounded-tr-[5px] rounded-br-[5px]" />
        </div>
        <div className="w-[59.30px] h-[87px] left-[75px] top-[74px] absolute">
            <img className="w-[59.30px] h-[56.67px] left-0 top-0 absolute rounded-xl" src="https://i0.wp.com/www.followchain.org/wp-content/uploads/2023/09/blue-smurf-cat.jpg?w=450&ssl=1" />
            <div className="w-[59px] h-[17px] left-0 top-[70px] absolute text-black text-xs font-semibold font-['Nunito']">haxxar</div>
        </div>
    </div>
</div>

        

    </div>
  )
}

export default Dashboard