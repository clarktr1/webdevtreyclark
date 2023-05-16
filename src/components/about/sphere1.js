import React from "react";
import { TagCloud } from "@frank-mayer/react-tag-cloud";
// same as: import TagCloud from "@frank-mayer/react-tag-cloud"

const Sphere1 = () => (
	<TagCloud
		options={(w: Window & typeof globalThis): TagCloudOptions => ({
			// radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
            radius:160,
			maxSpeed: "medium",
		})}
		onClick={(tag: string, ev: MouseEvent) => alert(tag)}
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