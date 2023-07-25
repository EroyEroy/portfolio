import React, { Component } from 'react';
import '../tabs.scss';

export function Skill({ name }: { name: string }) {
	return (
		<div className='skills__card'>
			<img src={require("../images/mark.svg")} alt="mark" />
			<span className='skills__text'>{name}</span>
		</div>
	);
};