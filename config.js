exports.PORT = process.env.PORT || 5000; // use heroku's dynamic port or 5000 if localhost
exports.DEBUG = true;
exports.ENVIRONMENT = (process.env.state==='production')?'production':'sandbox';
exports.CALLBACK_URL = 'http://localhost:' + this.PORT + '/oauth/callback';
exports.PUSH_TOPIC = 'CDFActivityUpdates';

exports.CLIENT_ID = '';
exports.CLIENT_SECRET = '';
exports.API_VERSION = 'v27.0';

process.env.CDF_USERNAME='';
process.env.CDF_PASSWORD='';

// configuration for PRELOAD
exports.DB = {
    MAX_EVENTS: 0,      // maximum number of past events to be sent, 0 for unlimited
                        // MAX_EVENTS should be enabled to ensure a fast database response
    MAX_TIMESPAN: 0,    // maximum passed milliseconds between now and past events to be sent, 0 for unlimited
    TIMESTAMP_GETTER: function(data) { return data.sobject.SystemModstamp }, // name of the field for the timestamp in the event record
    MAX_DELAY:  3000,   // maximum delay for all past events to be shown
    MIN_DELAY:   500    // minimum delay for all past events to be shown
};
