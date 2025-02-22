const datasetDao = require('../data/daos/dataset.dao.server');

module.exports = app => {
    createdataset = (req, res) => {
        datasetDao.createdataset(req.body).then((x) => {
            res.send(JSON.stringify("{res:success}"))
        })
    };

    finddatasetById = (req, res) =>
        datasetDao.finddatasetById(req.params['datasetId']).then(response => res.send(response));

    findAlldatasets = (req, res) =>
        datasetDao.findAlldatasets().then(response => res.send(response));

    deletedataset = (req, res) =>
        datasetDao.deletedataset(req.params['datasetId']).then(response => {
            req.session.destroy();
            res.send(200);
        });
    
    findAllbiases = (req, res) =>{
        //datasetDao.findAllbiases().then(response => res.send(response.filter(el => el != null)));
    }

    findBiasBasedResults = (req, res) => {
        datasetDao.findBiasBasedResults(req.params['bias']).then(response => res.send(response));
    }


    app.post('/api/dataset/create', createdataset);
    app.delete('/api/dataset/:datasetId', deletedataset);
    app.get('/api/dataset/:datasetId', finddatasetById);
    app.get('/api/dataset/biases', findAllbiases);
    app.get('/api/dataset/', findAlldatasets);
    app.get('/api/result/:bias', findBiasBasedResults);

};
