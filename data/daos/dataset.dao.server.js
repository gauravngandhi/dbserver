const datasetModel = require('../models/dataset/dataset.model.server');

createdataset = dataset =>
    datasetModel.create(dataset);

finddatasetById = datasetId =>
    datasetModel.findById(datasetId);

deletedataset = datasetId =>
    datasetModel.deleteOne({_id:datasetId});

findAllbiases = () =>
    datasetModel.find().distinct('type_of_bias');

findAlldatasets = () => 
    datasetModel.find();
    
module.exports = {
    createdataset,
    finddatasetById,
    deletedataset,
    findAlldatasets,
    findAllbiases
};
