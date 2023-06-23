const express = require('express')
const router = express()
const asyncHandler = require('express-async-handler')

const Service = require('../models/services')

router.get('/api/service', async (req, res) => {
    const services = await Service.find()
    res.json(services)
})

router.post('/api/service', asyncHandler(async (req, res) => {
    const service = new Service({
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,
    })

    await Service.create(service)
    res.json('Service posted')
}))
router.post('/api/newservice', async (req, res) => {
    const service1 = new Service({
        id: 1,
        title: 'Graphic Designer',
    })
    const service2 = new Service({
        id: 2,
        title: 'Frontend Developer',
    })
    const service3 = new Service({
        id: 3,
        title: 'Content Creator',
    })
    const service4 = new Service({
        id: 4,
        title: 'Video Editing',
    })

    await service1.save()
    await service2.save()
    await service3.save()
    await service4.save()
    res.json({message: 'Services saved  succesfully'})
})

router.delete('/api/service', async (req, res) => {
    const service = Service.findById(req.params.id) 
    if (!service) {
        res.status(404).json({ message: 'Service not found' });
      } else {
        await service.remove();
        res.json('Service deleted');
      }
})

// router.put()

module.exports = router
