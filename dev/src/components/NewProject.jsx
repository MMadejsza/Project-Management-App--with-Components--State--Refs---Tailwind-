import Input from './Input';
import Modal from './Modal';
import {useRef} from 'react';

function NewProject({onAdd, onCancel}) {
	const modalRef = useRef();
	const titleRef = useRef();
	const descriptionRef = useRef();
	const dueDateRef = useRef();

	function handleSafe() {
		const enteredTitle = titleRef.current.value;
		const enteredDescription = descriptionRef.current.value;
		const enteredDueDate = dueDateRef.current.value;
		// validation...

		if (
			enteredTitle.trim() === '' ||
			enteredDescription.trim() === '' ||
			enteredDueDate.trim() === ''
		) {
			modalRef.current.open();
			return;
		}

		onAdd({
			title: enteredTitle,
			description: enteredDescription,
			dueDate: enteredDueDate,
		});
	}

	return (
		<>
			<Modal
				ref={modalRef}
				buttonCaption='Okay'>
				<h2 className='text-xl font-bold text-stone-600 my-4'>Invalid Input</h2>
				<p className='text-stone-500 mb-4'>
					Oops... looks like you forgot to enter a value.
				</p>
				<p className='text-stone-500 mb-4'>Provide valid inputs.</p>
			</Modal>

			<div className='w-[35rem] mt-16'>
				<menu className='flex items-center justify-end gap-4 my-4'>
					<li>
						<button
							className='text-stone-800 hover:text-stone-950'
							onClick={onCancel}>
							Cancel
						</button>
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
		</>
	);
}

export default NewProject;
