import Section from "@/components/Section"
import InputField from "./InputField"

export default function Skills() {
	let skill = {
		programmingLanguage: {
			name: "programmingLanguage",
			placeholder: "Programming Language: C++, Java, Python",
		},
		toolsAndTechnologies: {
			name: "toolsAndTechnologies",
			placeholder: "Tools & Technologies: Android, Git, ReactJS",
		},
		coreSkills: {
			name: "coreSkills",
			placeholder: "Core Skills: Communication, Leadership, Project Management",
		},
	}
	return (
		<Section name="Skills">
			<p className="mx-auto my-1 p-1 text-xs select-none italic">
				(Please input comma separated values in case of mulitple values)
			</p>

			<div className="mx-auto my-1 w-full flex flex-row justify-around">
				<InputField data={skill.programmingLanguage} />
			</div>

			<div className="mx-auto my-1 w-full flex flex-row justify-around">
				<InputField data={skill.toolsAndTechnologies} />
			</div>

			<div className="mx-auto my-1 w-full flex flex-row justify-around">
				<InputField data={skill.coreSkills} />
			</div>
		</Section>
	)
}
