import React, { useState, useEffect } from "react";

export function Practica() {
	const [mostrar, setMostrar] = useState(true);

	return (
		<div>
			<button onClick={() => setMostrar(false)}>Dejar de mostrar</button>
			{mostrar ? <MouseColor /> : null}
		</div>
	);
}

function MouseColor() {
	const [color, setColor] = useState("blue");

	//cuando el mouse pase la mitad de la pantalla, el color cambiará a rosado
	useEffect(() => {
		//la funcion reciverá un evento
		function desplazamientoMouse(evento) {
			//cuando el mose se desplace en el eje X
			if (evento.clientX < window.innerWidth / 2) {
				setColor("blue");
			} else {
				setColor("pink");
			}
		}
		//la funcion la ejecutará el navegador
		window.addEventListener("mousemove", desplazamientoMouse);

		//VAMOS A CREAR UNA FUNCIÓN QUE REALICE LA LIMPIEZA CUANDO EL COMPONENTE NO ESTE DISPONIBLE o se desmonte (DESPUÉS DE HABER PRESIOINADO EL BOTON "DEJAR DE MOSTRAR")
		//useEffect ejecuta y luego limpia
		return () => {
			window.removeEventListener("mousemove", desplazamientoMouse);
		};
	}, []);
	//AL AGREGAR EL ARTRAY, LE ESTOY DICEIENDO A USE EFFECT QUE SE EJECUTE SOLO CUANDOO ALGO QUE ESTE DENTRO DEL ARRAY CAMBIE
	//console.log("Ocurrió el render");

	return <div style={{ height: "100vh", background: color }}></div>;
}
