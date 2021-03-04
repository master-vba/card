import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { Link } from 'react-router-dom'

export function CardAdd() {
	const [data, setData] = useState({
		cvc: "",
		expiry: "",
		name: "",
		number: ""
	});
	const handleInputChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value
		});
	};

	return (
		<div id="PaymentForm">
			<Cards
				cvc={data.cvc}
				expiry={data.expiry}
				focus={data.focus}
				name={data.name}
				number={data.number}
			/>
			<form action="">
				<input
					type="number"
					name="cvc"
					placeholder="CVC са полеђине картице"
					onChange={handleInputChange}
				/>
				<input
					type="date"
					name="expiry"
					placeholder="Датум истека картице"
					onChange={handleInputChange}
				/>
				<input
					type="text"
					name="name"
					placeholder="Ваше име, латиницом"
					onChange={handleInputChange}
				/>
				<input
					type="number"
					name="number"
					placeholder="Број картице без размака"
					onChange={handleInputChange}
				/>
			</form>
		</div>
	);
};