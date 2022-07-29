const { Schema, model } = require("mongoose");

const MenuSchema = new Schema(
  {
    prato: 
      {
        type: [String],
        validate: v => Array.isArray(v) && v.length > 0,

        
      },
    
  },

  { timestamps: true }
);

module.exports = model("Menu", MenuSchema);
