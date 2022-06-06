import React from 'react';
import { Navbar } from 'react-materialize';

const Navigation = () => {
	return (
		<Navbar className='navbar-container teal lighten-1'>
			<a href='/'> Identify celebrities </a>
			<a href='/chatbot'> Chatbot </a>
		</Navbar>
	);
};

export default Navigation;
