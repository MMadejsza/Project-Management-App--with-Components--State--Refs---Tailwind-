import React, {useState} from 'react';

import SideBar from './components/sideBar.jsx';
import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';

function App() {
	const [projectState, setProjectState] = useState({
		selectedProjectId: undefined,
		projects: [],
	});

	function handleStartAddProject() {
		setProjectState((prevState) => {
			return {
				...prevState,
				selectedProjectId: null,
			};
		});
	}

	function handleAddProject(projectData) {
		setProjectState((prevState) => {
			const newProject = {
				...projectData,
				id: Math.random(),
			};

			return {
				...prevState,
				selectedProjectId: undefined,
				projects: [...prevState.projects, newProject],
			};
		});
	}
	console.log(projectState);

	let content;

	if (projectState.selectedProjectId === null) {
		content = <NewProject onAdd={handleAddProject} />;
	} else if (projectState.selectedProjectId === undefined) {
		content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
	}

	return (
		<>
			<main className='h-screen my-8 flex gap-8'>
				<SideBar
					onStartAddProject={handleStartAddProject}
					projects={projectState.projects}
				/>
				{content}
			</main>
		</>
	);
}

export default App;
