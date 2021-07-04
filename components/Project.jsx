import Section from "@/components/Section"
import DetailGroup from "@/components/DetailGroup"
import DescGroup from "@/components/DescGroup"
import DatePicker from "@/components/DatePicker"

export default function Project({ projectCount, addProject, removeProject }) {
	const projectField = [
		{
			placeholder: "Project Name",
			name: "projName",
		},
		{
			placeholder: "Tools & Tech used",
			name: "projTool",
		},
	]

	return (
		<Section name="Project">
			<div className="mx-auto my-1 w-full flex flex-col justify-around place-items-center">
				<div className="mx-auto my-1 p-1 w-full">
					{projectCount.length > 0 && (
						<p className="mx-auto my-1 p-1 text-xs select-none italic">
							(Incase of multiple description statements, use the button to add
							description)
						</p>
					)}
					{projectCount.map((project, idx) => (
						<div key={idx} className="flex flex-col place-items-center">
							<h6 className="mx-auto my-1 h-8 w-8 select-none flex items-center justify-center rounded-full text-white bg-blue-900">
								{idx + 1}
							</h6>
							<DetailGroup detailField={projectField} count={project} />
							<DatePicker field="projDura" count={project} />
							<DescGroup name="projDesc" count={project} />
						</div>
					))}
				</div>
				<div className="mx-auto my-1 w-full flex flex-row justify-center place-items-center">
					<button
						type="button"
						onClick={addProject}
						className="m-1 px-3 py-2 rounded text-sm select-none transition-all duration-500 border text-black bg-white lg:hover:text-white lg:hover:bg-green-600"
					>
						Add Project
					</button>
					{projectCount.length ? (
						<button
							type="button"
							onClick={removeProject}
							className="m-1 px-3 py-2 rounded text-sm select-none transition-all duration-500 border text-black bg-white lg:hover:text-white lg:hover:bg-red-700"
						>
							Remove Project
						</button>
					) : null}
				</div>
			</div>
		</Section>
	)
}
