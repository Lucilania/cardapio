const Menu = require("../models/menuModels");

const getAll = async (req, res) => {
  try {
    const allMenu = await Menu.find();
    res.status(200).send(allMenu);
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};

const createMenu = async (req, res) => {
  try {
    const newMenu = await new Menu(req.body);
    await newMenu.save();
    res.status(201).send(newMenu);
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};

const updateMenu = async (req, res) => {
  try {
    const menuRequired = await Menu.findById(req.params.id);
    if (!menuRequired) {
      return res.status(404).json({
        message: "ñ possui esse menu",
      });
    }
    menuRequired.prato = req.body.prato || menuRequired.prato;

    const newMenu = await menuRequired.save();
    res.status(200).send(newMenu);
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};

const deleteMenu = async (req, res) => {
  try {
    const menuRequired = await Menu.findById(req.params.id);
    if (!menuRequired) {
      return res.status(404).json({
        message: "ñ possui esse menu",
      });
    }
    await menuRequired.delete();
    res.status(200).json({ message: "menu deletado com sucesso" });
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};

const getById = async (req, res) => {
  try {
    const menuRequired = await Menu.findById(req.params.id);
    if (!menuRequired) {
      return res.status(404).json({
        message: "ñ possui esse menu",
      });
    }

    res.status(200).send(menuRequired);
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};

module.exports = { deleteMenu, updateMenu, getAll, createMenu, getById };
