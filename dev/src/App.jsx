import React, {useState} from 'react';

import SideBar from './components/sideBar.jsx';
import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import SelectedProject from './components/selectedProject.jsx';

function App() {
	const [projectState, setProjectState] = useState({
		selectedProjectId: undefined,
		projects: [],
	});

	function handleDeleteProject() {
		setProjectState((prevState) => {
			return {
				...prevState,
				selectedProjectId: undefined,
				projects: prevState.projects.filter(
					(project) => project.id !== prevState.selectedProjectId,
				),
			};
		});
	}
	function handleSelectProject(id) {
		setProjectState((prevState) => {
			return {
				...prevState,
				selectedProjectId: id,
			};
		});
	}
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
	function handleCancelAddProject(projectData) {
		setProjectState((prevState) => {
			return {
				...prevState,
				selectedProjectId: undefined,
			};
		});
	}
	console.log(projectState);

	const selectedProject = projectState.projects.find(
		(project) => project.id === projectState.selectedProjectId,
	);
	let content = (
		<SelectedProject
			project={selectedProject}
			onDelete={handleDeleteProject}
		/>
	);

	if (projectState.selectedProjectId === null) {
		content = (
			<NewProject
				onAdd={handleAddProject}
				onCancel={handleCancelAddProject}
			/>
		);
	} else if (projectState.selectedProjectId === undefined) {
		content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
	}

	return (
		<>
			<main className='h-screen my-8 flex gap-8'>
				<SideBar
					onStartAddProject={handleStartAddProject}
					projects={projectState.projects}
					onSelectProject={handleSelectProject}
				/>
				{content}
			</main>
		</>
	);
}

export default App;
