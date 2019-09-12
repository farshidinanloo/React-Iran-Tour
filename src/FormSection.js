import React from 'react';
import './styles/FormSection.scss';

const FormSection = () => {
	return (
		<section className='section-form'>
			<div className='row'>
				<div className='form'>
					<div className='form__container'>
						<form action='#' className='contact'>
							<div className=' u-margin-bottom-medium'>
								<h2 className='heading-secondary'>
									فرم مشاوره رایگان
								</h2>
							</div>
							<div className='contact__group'>
								<input
									type='text'
									className='contact__input'
									placeholder='نام و نام خانوادگی'
									id='name'
									required
								/>
								<label
									htmlFor='name'
									className='contact__label'
								>
									نام و نام خانوادگی
								</label>
							</div>
							<div className='contact__group'>
								<input
									type='text'
									className='contact__input'
									placeholder='شماره تماس'
									id='phone'
									required
								/>
								<label
									htmlFor='phone'
									className='contact__label'
								>
									شماره تماس
								</label>
							</div>
							<div
								className='contact__group'
								style={{ marginBottom: '3rem' }}
							>
								<div className='contact__radio-group'>
									<input
										type='radio'
										className='contact__radio-input'
										id='local'
										name='location'
									/>
									<label
										htmlFor='local'
										className='contact__radio-label'
									>
										<span className='contact__radio-button'></span>
										تور داخلی
									</label>
								</div>
								<div className='contact__radio-group'>
									<input
										type='radio'
										className='contact__radio-input'
										id='foreign'
										name='location'
									/>
									<label
										htmlFor='foreign'
										className='contact__radio-label'
									>
										<span className='contact__radio-button'></span>
										تور خارجی
									</label>
								</div>
							</div>
							<div className='contact__group'>
								<button className='btn btn--yellow'>
									ارسال &larr;
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FormSection;
