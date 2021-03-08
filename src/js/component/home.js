import React, { useState, useEffect } from "react";



//create your first component
export function Home() {
	const [cuenta, setCuenta] = useState(0);

	//useEfffect se ejecuta luego de que react ya actiuualizó el DOM, es decir, todo lo que retorna
	//useEffect es como un puente que nos permite sacar e introducir data de react

	useEffect(() => {
		console.log(`La cuenta es ${cuenta}`);
		document.title = `La cuenta es ${cuenta}`;//cambia el titulo en la pestaña del navegador
	});
	return (
		<div>
			<h1>La cuenta es: {cuenta}</h1>
			<button onClick={() => setCuenta(cuenta + 1)}>Aumentar</button>
		</div>
	);
}
