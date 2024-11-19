import Input from './Input';
import {useRef} from 'react';

function NewProject({onAdd}) {
	const titleRef = useRef();
	const descriptionRef = useRef();
	const dueDateRef = useRef();

	function handleSafe() {
		const enteredTitle = titleRef.current.value;
		const enteredDescription = descriptionRef.current.value;
		const enteredDueDate = dueDateRef.current.value;
		// validation...

		onAdd({
			title: enteredTitle,
			description: enteredDescription,
			dueDate: enteredDueDate,
		});
	}

	return (
		<div className='w-[35rem] mt-16'>
			<menu className='flex items-center justify-end gap-4 my-4'>
				<li>
					<button className='text-stone-800 hover:text-stone-950'>Cancel</button>
				</li>
				<li>
					<button
						onClick={handleSafe}
						className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'>
						Save
					</button>
				</li>
			</menu>
			<div>
				<Input
					ref={titleRef}
					label='Title'
					type='text'
				/>
				<Input
					ref={descriptionRef}
					label='Description'
					textarea
					type='text'
				/>
				<Input
					ref={dueDateRef}
					label='Due Date'
					type='date'
				/>
			</div>
		</div>
	);
}

export default NewProject;
