import Section from '@/components/Section'
import DetailGroup from "@/components/DetailGroup"
import DescGroup from "@/components/DescGroup"

export default function Project({ projectCount, addProject }) {
	const projectField = [
		{
			placeholder: "Project Name",
			name: "projName",
		},
		{
			placeholder: "Tools & Tech used",
			name: "projTool",
		},
		{
			placeholder: "Project Duration",
			name: "projDura",
		},
	]

	return (
		<Section name='Project'>
			<div className="m-1 w-full flex flex-col justify-around place-items-center">
				<h4 className="m-1 p-1 flex-shrink-0">Project Details</h4>
				<div className="m-1 p-1 w-full">
					{projectCount.map((project, idx) => (
						<div key={idx} className="flex flex-col place-items-center">
							<p className="m-1 p-1 text-xs select-none italic">
								(Incase of multiple description statements, use the button to add
								description)
							</p>
							<DetailGroup detailField={projectField} count={project} />
							<DescGroup name="projDesc" count={project} />
						</div>
					))}
				</div>
				<button
					type="button"
					onClick={addProject}
					className='m-1 p-2 w-1/4 rounded-xl transition-all border text-black bg-white lg:hover:text-white lg:hover:bg-purple-900'
				>
					Add Project
				</button>
			</div>
		</Section>
	)
}
