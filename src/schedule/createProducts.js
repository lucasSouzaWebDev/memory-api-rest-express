const lodash = require('lodash')
const schedule = require('node-schedule')
const productModel = require('../models/product')

const execTask = () => {
    const task = schedule.scheduleJob('*/5 * * * * *', function() {
        const product = productModel.saveProduct({
            name: `Notebook ${lodash.random(5, 1000)}`,
            price: lodash.random(10, 4000, true),
        })
        console.log(`Created product ${product.name}!`);
    })

    setTimeout(function() {
        task.cancel();
        console.log('createProducts task finalized!');
    }, 20000)
}

module.exports = {
    execTask
}
