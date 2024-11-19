import SideBar from './components/sideBar.jsx';
import NewProject from './components/NewProject.jsx';
// import NewProject from './components/NewProject.jsx';

function App() {
	return (
		<>
			<main className='h-screen my-8 flex gap-8'>
				<SideBar />
				<NewProject />
			</main>
		</>
	);
}

export default App;
