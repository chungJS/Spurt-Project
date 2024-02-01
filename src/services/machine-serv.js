const machineRepo = require('../repositories/machine-repo');
const isusingRepo = require('../repositories/is_using-repo');

exports.machineUse = async (req, res) => {
    const { machineId, userId } = req.body;
    const new_use = await isusingRepo.addIsusing(machineId, userId);
    res.json(new_use);
}

exports.machineList = async (req, res) => {
    const machines = await machineRepo.listMachines();
    res.json(machines);
}