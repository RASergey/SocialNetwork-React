import React from 'react';
import style from './FormsControls.module.css';

export const Element = TypeElement => ({ input, meta, ...props }) => {

	let hasError = meta.dirty && !meta.valid;

	return (
		<div className={(hasError ? style.error : '') + ' ' + (TypeElement === 'input' ? style.input : style.textarea)}>
			<TypeElement {...input} {...props} />
			<span>{meta.error}</span>
		</div >
	)
}