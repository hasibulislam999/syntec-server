/* internal import */
const { postAServiceToService } = require("../services/service.service");

/* insert service to db */
exports.postAServiceToController = async (req, res, next) => {
  try {
    const result = await postAServiceToService(req.body);

    res.status(201).json({
      acknowledgement: true,
      message: "Created",
      description: "Insert new service to DB",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* display services from db */
exports.displayAllServicesFromController = async(req, res, next) => {
    try {
        const result = await displayAllServicesFromService();

        res.status(200).json({
            acknowledgement: true,
            message: "OK",
            description: "Fetching all services from DB",
            data: result
        })
    } catch (error) {
        next(error);
    }
}