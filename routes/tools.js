const express = require('express');
const router = express.Router();
const Tool = require('../models/Tool');

// Get all tools or filter by category
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};
    const tools = await Tool.find(filter).sort({ createdAt: -1 });
    res.json(tools);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Search tools by keyword
router.get('/search', async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) {
      return res.json([]);
    }
    
    const tools = await Tool.find({
      $or: [
        { name: { $regex: q, $options: 'i' } },
        { description: { $regex: q, $options: 'i' } }
      ]
    }).sort({ createdAt: -1 });
    
    res.json(tools);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add new tool
router.post('/', async (req, res) => {
  const tool = new Tool({
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    logo: req.body.logo,
    url: req.body.url
  });

  try {
    const newTool = await tool.save();
    res.status(201).json(newTool);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update tool
router.put('/:id', async (req, res) => {
  try {
    const tool = await Tool.findById(req.params.id);
    if (!tool) {
      return res.status(404).json({ message: 'Tool not found' });
    }

    tool.name = req.body.name || tool.name;
    tool.description = req.body.description || tool.description;
    tool.category = req.body.category || tool.category;
    tool.logo = req.body.logo || tool.logo;
    tool.url = req.body.url || tool.url;

    const updatedTool = await tool.save();
    res.json(updatedTool);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete tool
router.delete('/:id', async (req, res) => {
  try {
    const tool = await Tool.findById(req.params.id);
    if (!tool) {
      return res.status(404).json({ message: 'Tool not found' });
    }
    
    await Tool.findByIdAndDelete(req.params.id);
    res.json({ message: 'Tool deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

