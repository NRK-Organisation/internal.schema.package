const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserGroupSchema = new Schema({
    groupName: {
        type: String,
        required: true
    },
    groupDescription: {
        type: String
    },
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('UserGroup', UserGroupSchema);