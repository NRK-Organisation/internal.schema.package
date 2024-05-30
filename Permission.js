const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PermissionSchema = new Schema({
    permissionName: {
        type: String,
        required: true
    },
    permissionCode: {
        type: String,
        required: true
    },
    permissionDescription: {
        type: String
    },
    permissionType: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Permission', PermissionSchema);