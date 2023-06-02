import React from "react";
import { TagCloud } from "@frank-mayer/react-tag-cloud";

const Sphere1 = () => (
	<TagCloud
		options={(w: Window & typeof globalThis): any => ({
            radius:140,
			maxSpeed: "medium",
		})}
		onClickOptions={{ passive: true }}
	>
		{[
		"HTML",
        "CSS",
        "JavaScript",
        "React",
        "Sequelize",
        "MySQL",
        "NodeJS",
        "ES6",
        "GIT",
        "GITHUB",
        "MongoDB",
        "Material UI",
        "Express",
        "Heroku",
		]}
	</TagCloud>
);
export default Sphere1;