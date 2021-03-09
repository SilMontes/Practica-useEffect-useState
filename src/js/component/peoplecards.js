import React from "react";
import { Likes } from "./likes";

export function PeopleCards() {
	const users = [
		{
			name: "John Brown",
			age: "30",
			gender: "male",
			occupation: "baker",
			favorite: "blue",
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHQ6lNVxDvzXPH05FyI-BVqoSygpF_-AOLGA&usqp=CAU"
		},
		{
			name: "Ana Williams",
			age: "32",
			gender: "female",
			occupation: "astronout",
			favorite: "green",
			image:
				"https://media-cdn.tripadvisor.com/media/photo-s/07/4d/57/70/andbeyond-ngorongoro.jpg"
		},
		{
			name: "Matthew Bristol",
			age: "18",
			gender: "male",
			occupation: "singer",
			favorite: "turquoise",
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHQ6lNVxDvzXPH05FyI-BVqoSygpF_-AOLGA&usqp=CAU"
		},
		{
			name: "Lily York",
			age: "20",
			gender: "female",
			occupation: "dancer",
			favorite: "violet",
			image:
				"https://media-cdn.tripadvisor.com/media/photo-s/07/4d/57/70/andbeyond-ngorongoro.jpg"
		}
	];
	const usersInformation = users.map(function(userInfo, i) {
		return (
			<div className="col-md-6 col-lg-3" key={i}>
				<div className="card mx-3" style={{ width: "18rem" }}>
					<img
						src={userInfo.image}
						style={{ width: "100%", height: "350px" }}
						className="card-img-top mt-2"
					/>
					<div className="card-body">
						<h5
							className="card-title"
							style={{ color: `${userInfo.favorite}` }}>
							{userInfo.name}
						</h5>
						<p className="card-text">
							{userInfo.name} is a {userInfo.age} years old{" "}
							{userInfo.gender}.Lorem ipsum, or lipsum as it is
							sometimes known, is dummy text used in laying out
							print, graphic or web designs. {userInfo.name} is a
							very passionate {userInfo.occupation}.
						</p>
						<a href="#" className="btn btn-info">
							More about {userInfo.name}
						</a>
						<Likes />
					</div>
				</div>
			</div>
		);
	});
	return (
		<div className="d-flex justify-content-around">{usersInformation}</div>
	);
}
