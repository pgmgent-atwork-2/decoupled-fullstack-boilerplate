import { handleHTTPError, HTTPError } from '../../utils';
import database from '../../database';

/*
Get all projects
*/
const getProjects = async (req, res, next) => {
	try {
		// Get projects from database
		const projects = await database.Project.findAll();

    if (!projects || projects.length === 0) {
      throw new HTTPError(`Could not found projects!`, 404);
    }

		// Send response
		res.status(200).json(projects);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/*
Get a specific project
*/
const getProjectById = async (req, res, next) => {
	try {
		// Get projectId parameter
		const { projectId } = req.params;
		// Get specific project from database
		const project = await database.Project.findAll({
			where: {
				id: projectId,
			},
		});
		// Send response
		res.status(200).json(project);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

export { getProjectById, getProjects };
