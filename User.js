const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userRole: {
        roleType: {
            type: String,
            required: true
        },
    },
    email: {
        type: String,
    },
    activities: [{
        type: Schema.Types.ObjectId,
        ref: 'Activity'
    }],
    organization: {
        level: {
            type: Number,
            required: true
        },
        organizationName: {
            type: String,
            required: true
        }
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);