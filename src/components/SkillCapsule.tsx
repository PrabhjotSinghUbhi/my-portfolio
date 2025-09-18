import { Button } from "./ui/button"

const SkillCapsule = ({ skill }: { skill: string }) => {
    return (
        <Button className='rounded-full border  font-semibold hover:border-white bg-[#333] text-white hover:bg-black'>
            {skill}
        </Button>)
}

export default SkillCapsule;